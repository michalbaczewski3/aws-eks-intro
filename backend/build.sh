#!/bin/bash

DOCKER_BUILDKIT=1  docker build -f ./microservices/hello/Dockerfile -t aws-eks-intro/hello .
DOCKER_BUILDKIT=1  docker build -f ./microservices/info/Dockerfile -t aws-eks-intro/info .
