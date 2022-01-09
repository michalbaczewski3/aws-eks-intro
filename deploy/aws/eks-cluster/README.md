## Create EKS Cluster
attention: this step will mod your kube config file -> backup your prev config
this can take up to 30min:
`time eksctl create cluster -f cluster.yaml`
verify:
`kubectl get nodes`

## Disable CloudWatch after full prod init (costs) - optional

## DELETE EKS Cluster - after training
`kubectl get all`
`kubectl delete all --all`
`kubectl get all`
https://docs.aws.amazon.com/eks/latest/userguide/delete-cluster.html
`eksctl delete cluster -f cluster.yaml`
