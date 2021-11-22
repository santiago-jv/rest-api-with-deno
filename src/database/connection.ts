import {Client} from "https://deno.land/x/mysql/mod.ts"
import { config } from "https://raw.githubusercontent.com/daychongyang/dotenv/master/mod.ts";
config();


const client = await new Client().connect({
    hostname:Deno.env.get('DATABASE_HOST') || 'localhost',
    username:Deno.env.get('DATABASE_USER') || 'root',
    password:Deno.env.get('DATABASE_PASSWORD') || '',
    db:Deno.env.get('DATABASE') || 'users_database'
})
export default client;