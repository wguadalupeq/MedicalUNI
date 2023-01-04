import * as dotenv from 'dotenv'
dotenv.config()

const connectionData = {
  host: process.env.DBHOST,
  database: process.env.DBDATABASE,
  user: process.env.DBUSER,
  password: process.env.DBPASSWORD,
  port: process.env.DBPORT
}


const port = parseInt(process.env.PORT, 10) || 3000

export default { connectionData, port };