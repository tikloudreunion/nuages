ARG NODE_VERSION=24.2.0
FROM node:${NODE_VERSION}-bookworm-slim AS builder

ENV PYTHON=python3

# Set working directory
WORKDIR /usr/src/nuages

# Copy package files separately for better caching
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the project
RUN npm run build


FROM node:${NODE_VERSION}-bookworm-slim AS runner

# Set working directory
WORKDIR /usr/src/nuages

# Copy only the necessary built files from builder
COPY --from=builder /usr/src/nuages/.next .next
COPY --from=builder /usr/src/nuages/package.json package.json
COPY --from=builder /usr/src/nuages/package-lock.json package-lock.json

# Install only production dependencies
RUN npm ci --omit=dev
    
# Create non-root user
RUN useradd --system --home /usr/src/nuages --shell /usr/sbin/nologin nuages

# Set permissions
RUN chown -R nuages:nuages /usr/src/nuages
USER nuages

# Set environment variables
ENV NODE_ENV=production
ENV HOSTNAME="0.0.0.0"
ENV PORT=3000

# Start the app
CMD ["npm", "run", "start"]