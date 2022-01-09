# Warning

All secrets should be changed during deployment - repo secrets are only examples

## AWS Account - env setup

### Min permissions, polices and groups (as root)

EksAccess: \
https://eksctl.io/usage/minimum-iam-policies/ \
ALBIngressControllerIAMPolicy (https://aws.amazon.com/blogs/opensource/kubernetes-ingress-aws-alb-ingress-controller/): \
https://raw.githubusercontent.com/kubernetes-sigs/aws-alb-ingress-controller/v1.1.4/docs/examples/iam-policy.json 

#### Admin group polices:

* EksAccess (custom - prev step)
* AmazonEC2FullAccess
* IAMFullAccess
* AmazonS3FullAccess
* AmazonVPCFullAccess
* AWSBillingReadOnlyAccess
* AWSCloudFormationFullAccess
* ElasticLoadBalancingFullAccess
* ALBIngressControllerIAMPolicy (custom - prev step)
* AmazonEC2ContainerRegistryFullAccess

#### Admin billing info:
Find service -> Account (right top corner, under username) -> IAM User and Role Access to Billing Information -> Edit -> check Activate IAM Access -> update

### Credentials - gen (as admin user)

#### Kay pair

https://console.aws.amazon.com/console/home \
choose region (ex. eu-central-1, right top corner) \
Find service -> EC2 -> Kay pair name: eksIntroKey -> store in secret place .pem file

#### Access key

Find service -> IAM -> Users -> click yours username -> Security credentials -> create access key -> download .csv file
-> store in secret place

### Credentials - config

`cd ~ `\
`mkdir .aws `\
`cd .aws`\
`touch credentials`\
`nano credentials`
file from your generated .csv credentials:
```
[default]
aws_access_key_id=<...>
aws_secret_access_key=<...>
region=eu-central-1 output=json
```
`aws sts get-caller-identity`

# AWS INIT

* eks-cluster
* limit
* dashboard
* registry
* hello
