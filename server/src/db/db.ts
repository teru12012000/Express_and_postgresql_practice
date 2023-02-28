import { Pool } from "pg";
import {config} from "dotenv";
config()
export const pool=new Pool({
  user:"postgres",
  host:"localhost",
  database:"member",
  password:process.env.pass as string,
  port:5432,
})