import * as schema from "@/lib/db/schema";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const sql = new Pool({
  connectionString: process.env.DATABASE_URL,
});
export const db = drizzle(sql, { schema });
