#!/bin/sh

# backend
aws ecr create-repository --repository-name aws-eks-intro/hello --image-scanning-configuration scanOnPush=true --region eu-central-1

