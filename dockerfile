FROM node:20-alpine AS base

FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

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

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

RUN [ -d ".next/standalone/node_modules" ] && cp -r .next/standalone/node_modules/* ./node_modules/ 2>/dev/null || true; \
    [ -d "node_modules/next" ] || (echo "❌ NextJS not found." && exit 1)

USER nextjs

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]