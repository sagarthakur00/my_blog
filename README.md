# Blog Website Docker Setup

A simple, beautiful blog website containerized with Docker and served using Nginx.

## Features
- Modern, responsive design
- Dark/Light theme toggle
- Search functionality
- Category filtering
- Modal blog post reading
- Optimized for performance

## Quick Start

### Using Docker Compose (Recommended)
```bash
# Build and run the container
docker-compose up -d

# View logs
docker-compose logs -f

# Stop the container
docker-compose down
```

### Using Docker directly
```bash
# Build the image
docker build -t my-blog-website .

# Run the container
docker run -d -p 8080:80 --name blog-website my-blog-website

# Stop the container
docker stop blog-website
docker rm blog-website
```

## Access the Website
Once running, visit: `http://localhost:8080`

## Development
To make changes during development, uncomment the volume mounts in `docker-compose.yml` and restart the container.

## Production Deployment
This container is ready for production deployment on any Docker-compatible platform:
- AWS ECS
- Google Cloud Run
- Azure Container Instances
- Kubernetes
- DigitalOcean App Platform

## Container Details
- **Base Image**: nginx:alpine
- **Port**: 80 (mapped to 8080 on host)
- **Size**: ~15MB (lightweight Alpine Linux)
- **Performance**: Optimized with gzip compression and caching headers
# my_blog
