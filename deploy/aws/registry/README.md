#Init
## Check group polices - req:
* AmazonEC2ContainerRegistryFullAccess

`aws ecr describe-repositories`

## Repo - create repositories
`aws ecr describe-repositories` output: empty array
`sh create.sh` \
`aws ecr describe-repositories` \

## Repo - docker login

`
aws ecr get-login-password --region eu-central-1 | docker login --username AWS --password-stdin <...>.dkr.ecr.eu-central-1.amazonaws.com
` 

`nano ~/.docker/config.json`

```
{
        "auths": {
                "<...>.dkr.ecr.eu-central-1.amazonaws.com": {
                        "auth": <...>
                },
                "<...>": {
                        "auth": <...>
                }
        }
}


```

## Docker push
`aws ecr describe-images --repository-name <...> ` \
`cd deploy/push` \
`sh push_backend.sh <...>` \
`aws ecr describe-images --repository-name <...> ` 

## Kubernetes registry secret
`aws ecr get-login-password --region eu-central-1`

## DELETE repository - optional
`aws ecr delete-repository --repository-name <...> --force`
