import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.get("/get", (req: Request, res: Response) => {
  console.log(req.query)
  res.send(req.query);
});

app.post("/login", (req: Request, res: Response) => {
  console.log(req.body)
  res.send("Received");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});