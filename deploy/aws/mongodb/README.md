# Inventory order
* secret
* service
* sts

## Mongo Replica set
`kubectl exec -it mongodb-sts-0 bash` \
`hostname -f` output ex.: `mongodb-sts-0.mongodb.default.svc.cluster.local` \
`mongo` \
`rs.initiate({ _id: "repl-set-1", version: 1, members: [{ _id: 0, host: "mongodb-sts-0.mongodb-service.default.svc.cluster.local:27017" }, { _id: 1, host: "mongodb-sts-1.mongodb-service.default.svc.cluster.local:27017" }, { _id: 2, host: "mongodb-sts-2.mongodb-service.default.svc.cluster.local:27017" }]}); `\
`rs.isMaster()` mast be master \
`rs.status()` output: {members: [3]} \
`use admin` \
`db.createUser({ user: "aei", pwd: "passw0rd_a", roles: [{role: "root", db: "admin"}]});` if not created on init \
`show users` \
`rs.isMaster()` \
`rs.stepDown()` \
`rs.isMaster()` \
`db.createUser({ user: "test", pwd: "passw0rd_a", roles: [{role: "root", db: "admin"}]});` if not created on init \
`exit`
`mongo --host "repl-set-1/mongodb-sts-0.mongodb-service.default.svc.cluster.local:27017,mongodb-sts-1.mongodb-service.default.svc.cluster.local:27017,mongodb-sts-2.mongodb-service.default.svc.cluster.local:27017" -u aei -p passw0rd_a`
`use admin` \
`show users`
