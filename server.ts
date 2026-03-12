import type { Request, Response } from "express";
import fs from "node:fs/promises";
import express from "express";
import { getBooks } from "./utils/get-books";
import { prisma } from "./lib/prisma";
type Book = {
  id: number;
  title: string;
};

const server = express();
const port = 3001;

server.use(express.json());

server.get("/users", async (req: Request, res: Response) => {
  const user = await prisma.user.findMany();

  res.status(200).json({ message: "Ok", user });
});
server.get("/users/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await prisma.user.findFirst({
    where: { id: Number(id) },
  });

  res.status(200).json({ message: "Ok", user });
});

server.post("/users", async (req: Request, res: Response) => {
  const { email, password, age, role } = req.body;
  const user = await prisma.user.create({
    data: { email, password, age, role },
  });

  res.status(200).json({ message: "Амжилттай", user });
});
server.delete("/users/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await prisma.user.delete({
    where: { id: Number(id) },
  });
  res.status(200).json({ message: "OK", user });
});

server.put("/users/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { email, password, age } = req.body;
  const user = await prisma.user.update({
    where: { id: Number(id) },
    data: { email, password, age },
  });
  res.status(200).json({ message: "OK", user });
});

server.listen(port, () => {
  console.log(`"Server aslaa", http://localhost:${port}`);
});
