const dotenv = require("dotenv")
dotenv.config()
const { MongoClient } = require("mongodb")
const client = new MongoClient(process.env.CONNECTIONSTRING)

let port = process.env.PORT
if (port == null || port == "") {
  port = 3000
}

async function start() {
  await client.connect()
  module.exports = client
  const app = require("./app")
  app.listen(port)
}

start()
