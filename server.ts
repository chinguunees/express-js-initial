import type { Request, Response } from "express";
import fs from "node:fs/promises";
import express from "express";
import { getBooks } from "./utils/get-books";

type Book = {
  id: number;
  title: string;
};

const server = express();
const port = 3001;

server.use(express.json());

server.get("/books", async (req: Request, res: Response) => {
  const books = await getBooks();

  res.status(200).json({ message: "Ok", books });
});

server.post("/books/:id", async (req: Request, res: Response) => {
  const params = req.params;
  const { title, id } = req.body;
  const books = await getBooks();
  const newBookId = books.length + 1;
  const newBook = { id: newBookId, title };

  res.status(200).json({ message: "ok", books });
});

server.listen(port, () => {
  console.log(`"Server aslaa", http://localhost:${port}`);
});

const writeToFile = async (books: string) => {
  try {
    await fs.writeFile("./db.json", books, "utf-8");
    console.log("test");
  } catch (error) {
    console.error(error);
  }
};
