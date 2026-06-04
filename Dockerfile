# Stage 1: Build stage
FROM node:20-alpine AS builder

# Install pnpm globally
RUN npm install -g pnpm

WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install dependencies using pnpm
RUN --mount=type=cache,target=/root/.pnpm-store \
    pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Build the app
RUN pnpm run build

# Stage 2: Production stage
FROM nginx:alpine AS serve

# Create all necessary directories and set permissions
RUN mkdir -p /var/cache/nginx /var/run /var/log/nginx /run && \
    chown -R nginx:nginx /var/cache/nginx /var/run /var/log/nginx /run && \
    chmod -R 755 /var/cache/nginx /var/run /var/log/nginx /run

# Copy built assets
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Switch to non-root user
USER nginx

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
