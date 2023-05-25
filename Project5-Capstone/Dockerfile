# 1. Build React app
FROM node:alpine AS development

# Set working directory
WORKDIR /usr/src/app

# 2. Copy frontend
COPY frontend/ ./frontend/
RUN cd frontend && npm install
RUN cd frontend && npm audit fix --audit-level=critical
RUN cd frontend && npm run build

# 3. Setup Nginx
FROM nginx:alpine

# Copy nginx config
COPY /configs/nginx.conf /etc/nginx/nginx.conf

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy Nginx
COPY --from=development /usr/src/app/frontend/build/ /usr/share/nginx/html

# 4. Expose port 80
EXPOSE 80

# 5. Run Nginx
ENTRYPOINT ["nginx", "-g", "daemon off;"]
