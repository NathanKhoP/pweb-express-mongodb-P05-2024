// src/index.ts
import express, { Express, Request, Response } from "express";
import connDB from "./db-conn";
import cors from "cors";
import authRoutes from "./router/auth.router";
import bookRoutes from "./router/book.router";
import mechanismRoutes from "./router/mechanism.router";
import formatResponse from "./utils/formatResponse";

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// mongodb atlas connection
connDB();

app.get("/", (req: Request, res: Response) => {
  const date = new Date().toLocaleString();
  const response = formatResponse("success", "Hello World", date);
  res.send(response);
});

// routers
app.use("/auth", authRoutes);
app.use("/book", bookRoutes);
app.use("/mechanism", mechanismRoutes);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});