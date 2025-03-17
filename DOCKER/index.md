## What is Docker?

- This is a virtualization software that allows developers to automate the deployment, scaling, and management of applications using containers.
- These containers are lightweight, portable, and self-sufficient units that package an application along with all its dependencies, libraries, and configurations, ensuring consistency across different enviroments.

## Why was it created?

## What problems does it solve?

## What is a docker image?

- This is a lightweight, standalone, and executable package that contains everything needed to run a software application, including:
  - Code
  - Runtime (Node.js, python, e.t.c)
  - Dependencies (libraries, frameworks)
  - Environment variables
  - Configuration files

## What is a docker container?

- This is a running instance of an image.

## Docker CLI commands

- docker images: to see images available
- docker ps: to see containers available
- docker pull <image name>:<tag number>: to pull a docker image from docker hub
- docker run <image name>:<tag number>: to run an image as a container
- docker run -d --name <image name>:<tag number>: to run a detached image as a container with user specified name
- docker init: to containerize your application i.e. to create a Dockerfile to define your image and a compose.yaml file to define how to run it

## What are Docker Registries?

- This is a storage and distribution system for Docker images
- A service for providing storage
- A collection of respositories

## What is a Docker Repository?

- This is a collection of images with the same name but different versions

## What is a Dockerfile?

- This is a text document that contains commands to assemble an image
- Docker can then build an image by reading those instructions
