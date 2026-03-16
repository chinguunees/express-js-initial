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

/////////// FOOOOOD CATEGORY

server.get("/category", async (req: Request, res: Response) => {
  const category = await prisma.foodCategory.findMany({
    include: {
      foods: true,
    },
  });
  res.status(200).json({ message: "Ok", category });
});

server.post("/category", async (req: Request, res: Response) => {
  const { name } = req.body;
  const category = await prisma.foodCategory.create({
    data: { name },
  });

  res.status(200).json({ message: "Амжилттай", category });
});

server.delete("/category/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const category = await prisma.foodCategory.delete({
    where: { id: Number(id) },
  });
  res.status(200).json({ message: "OK", category });
});

server.put("/category/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;
  const category = await prisma.foodCategory.update({
    where: { id: Number(id) },
    data: { name },
  });
  res.status(200).json({ message: "OK", category });
});

//////// FOOOOOOOODS

server.get("/foods/", async (req: Request, res: Response) => {
  const foods = await prisma.food.findMany();
  res.status(200).json({ message: "Ok", foods });
});

server.post("/foods", async (req: Request, res: Response) => {
  const { name, price, foodCategoryId } = req.body;
  const foods = await prisma.food.create({
    data: { name, price, foodCategoryId },
  });

  res.status(200).json({ message: "Амжилттай", foods });
});

server.delete("/foods/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const foods = await prisma.food.delete({
    where: { id: Number(id) },
  });
  res.status(200).json({ message: "OK", foods });
});

server.put("/foods/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, price, foodCategoryId } = req.body;
  try {
    const food = await prisma.food.update({
      where: { id: Number(id) },
      data: { name, price, foodCategoryId },
    });

    res.status(200).json({ message: "OK", food });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
});

server.listen(port, () => {
  console.log(`"Server aslaa", http://localhost:${port}`);
});
