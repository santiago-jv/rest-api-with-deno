import { Application } from "https://deno.land/x/oak/mod.ts";
import userRouter from "./routes/user.router.ts";
import { config } from "https://raw.githubusercontent.com/daychongyang/dotenv/master/mod.ts";
config();

const app = new Application();

app.use(userRouter.routes());

app.listen({port: Number(Deno.env.get('PORT')) || 8080});