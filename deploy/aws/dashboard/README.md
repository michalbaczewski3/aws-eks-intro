# Kubernetes Dashboard 

## Source
https://docs.aws.amazon.com/eks/latest/userguide/dashboard-tutorial.html

### Step 1 - Kubernetes Metrics Server
`kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml` 
`kubectl get deployment metrics-server -n kube-system`

### Step 2 - eks-admin service
`kubectl apply -f ./dashboard.yaml`

### Step 3 - Kubernetes Dashboard
`kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.4.0/aio/deploy/recommended.yaml`

### Step 4 - Connect to dashboard
`kubectl -n kube-system describe secret $(kubectl -n kube-system get secret | grep eks-admin | awk '{print $1}')`
`kubectl proxy`
http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/#/login
