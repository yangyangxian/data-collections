# Use multi-stage build to reduce image size
FROM node:22 AS builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the frontend
RUN npm run build

# Production image, only copy necessary files
FROM node:22-alpine AS prod

# Set the working directory in the container
WORKDIR /app

# Copy over package.json and package-lock.json
COPY --from=builder /app/package*.json ./

# Copy over node_modules, dist, and server folder from the builder stage
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/server ./server

# Install a lightweight static file server
RUN npm install -g serve

# Expose the port for the backend
EXPOSE 3000

# Expose the port for the frontend
EXPOSE 5173

# Update CMD to start both backend and frontend using concurrently
CMD ["npx", "concurrently", "node server/index.js", "serve -s dist -l 5173"]
