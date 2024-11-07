// src/index.ts
import express, { Express, Request, Response } from "express";
import connDB from "./db-conn";
import authRoutes from "./router/auth.router";

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// mongodb atlas connection
connDB();

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TS Server, running~");
});

// routers
app.use("/auth", authRoutes);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});