# ECS Fargate Deployment Demo

This project demonstrates how to deploy a containerized Node.js application to AWS using ECS Fargate and an Application Load Balancer.

## Overview

- Dockerized Node.js application
- Pushed image to Amazon ECR
- Deployed using ECS Fargate
- Exposed via Application Load Balancer
- Health checks configured
- Debugged real-world networking issues (504 Gateway Timeout)

##  Architecture

Internet → ALB → ECS Tasks (Fargate)

##Tech Stack

- Docker
- AWS ECS (Fargate)
- Amazon ECR
- Application Load Balancer
- CloudWatch Logs

## Key Learnings

- Container networking (0.0.0.0 vs localhost)
- ECS service & task configuration
- Load balancer health checks
- Security group debugging
- Resolving 504 Gateway Timeout issues

##  Endpoint

GET /whoami → returns a simple JSON response

## Notes

This project focuses on infrastructure and deployment rather than application complexity

## Deployment Steps

1. Build Docker image
2. Push to ECR
3. Create ECS cluster (Fargate)
4. Define task definition
5. Create service with ALB
6. Configure security groups
7. Debug health checks

## Author

Danyar Ali DevOps & Cloud Engineer
