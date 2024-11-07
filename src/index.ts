// src/index.ts
import express, { Express, Request, Response } from "express";
import connDB from "./db-conn";
import authRoutes from "./router/auth.router";
import formatResponse from "./utils/formatResponse";

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// mongodb atlas connection
connDB();

app.get("/", (req: Request, res: Response) => {
  const date = new Date().toLocaleString();
  const response = formatResponse("success", "Hello World", date);
  res.send(response);
});

// routers
app.use("/auth", authRoutes);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});