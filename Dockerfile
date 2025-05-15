# Use an official Node.js runtime as the base image
FROM node:18

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

# Install a lightweight static file server
RUN npm install -g serve

# Expose the port for the backend
EXPOSE 3000

# Expose the port for the frontend
EXPOSE 5173

# Update CMD to start both backend and frontend using concurrently
CMD ["npx", "concurrently", "node server/index.js", "serve -s dist -l 5173"]
