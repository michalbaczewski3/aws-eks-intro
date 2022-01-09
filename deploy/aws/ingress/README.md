# Source `https://kubernetes-sigs.github.io/aws-load-balancer-controller/v2.3/deploy/installation/`
## Step 1
check IAM Policy:
ALBIngressControllerIAMPolicy (https://aws.amazon.com/blogs/opensource/kubernetes-ingress-aws-alb-ingress-controller/):
https://raw.githubusercontent.com/kubernetes-sigs/aws-alb-ingress-controller/v1.1.4/docs/examples/iam-policy.json

## Step 2 - deploy ingress controller (AWS NLB)
source: https://kubernetes.github.io/ingress-nginx/deploy/#aws
`
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.1.0/deploy/static/provider/aws/deploy.yaml
`

## Step 3 - cert manager
`
kubectl apply --validate=false -f https://github.com/jetstack/cert-manager/releases/download/v1.5.3/cert-manager.yaml
`
## Step 4
source:
`
wget https://github.com/kubernetes-sigs/aws-load-balancer-controller/releases/download/v2.3.1/v2_3_1_full.yaml
`

`
kubectl apply -f v2_3_1_full.yaml
`

## Step 5
`
kubectl apply -f ingress.yaml
`
