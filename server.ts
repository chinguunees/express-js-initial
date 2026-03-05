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
server.get("/books/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const books = await getBooks();
  const book = books.find((book) => String(book.id) === id);

  res.status(200).json({ message: "Ok", book });
});

server.post("/books/", async (req: Request, res: Response) => {
  const { title } = req.body;
  const books: BookType[] = await getBooks();
  const newBookId = books.length + 1;
  const newBook = { id: newBookId, title };
  books.push(newBook);

  const writeJsonFile = async () => {
    try {
      await fs.writeFile("./db.json", JSON.stringify(books), "utf8");
      console.log("File created successfully");
    } catch (err) {
      console.error("Error writing file:", err);
    }
  };

  writeJsonFile();

  res.status(200).json({ message: "Амжилттай шинэ ном нэмэгдлээ", books });
});

server.listen(port, () => {
  console.log(`"Server aslaa", http://localhost:${port}`);
});

type BookType = {
  id: number;
  title: string;
};
