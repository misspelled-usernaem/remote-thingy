const jsonServer=require("json-server")
const Server=jsonServer.create()
const router=Server.router("db.json")
const defaults=jsonServer.defaults()
const port=process.env.PORT || 8080

Server.use(defaults)
Server.use(router)

Server.listen(port)
