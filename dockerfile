FROM node:20-slim AS base

FROM base AS deps
WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci --no-audit

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_OPTIONS="--max-old-space-size=1536"

ARG NEXT_PUBLIC_REF_RU
ARG NEXT_PUBLIC_REF_EU

ENV NEXT_PUBLIC_REF_RU=$NEXT_PUBLIC_REF_RU
ENV NEXT_PUBLIC_REF_EU=$NEXT_PUBLIC_REF_EU

RUN npm run build

FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN groupadd --system --gid 1001 nodejs && \
    useradd --system --uid 1001 --gid nodejs nextjs

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

USER nextjs

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]