# Use a lightweight web server
FROM nginx:alpine

# Copy your static site files to nginx
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80
