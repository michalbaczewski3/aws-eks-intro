#!/bin/sh

VERSION=$1

echo $VERSION

# Tag all
docker tag aws-eks-intro/hello:latest 871866584905.dkr.ecr.eu-central-1.amazonaws.com/aws-eks-intro/hello:$VERSION

# Push all
docker push 871866584905.dkr.ecr.eu-central-1.amazonaws.com/aws-eks-intro/hello:$VERSION
