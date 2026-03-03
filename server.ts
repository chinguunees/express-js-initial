import type { Request, Response } from "express";

import express from "express";
const server = express();
const port = 3001;

const books = [
  {
    id: 1,
    title: "Harry Potter",
    author: "JJK",
  },
  {
    id: 2,
    title: "Harry Potter 2",
    author: "JJK",
  },
];
server.use(express.json());
server.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Ok" });
});

server.get("/books", (req: Request, res: Response) => {
  res.status(200).json(books);
});
server.get("/books/:id", (req: Request, res: Response) => {
  const params = req.params;
  const id = params.id;
  const book = books.find((book) => String(book.id) === String(id));
  res.status(200).json(book);
});

server.post("/books", (req: Request, res: Response) => {
  const { title, author } = req.body;

  const newBookId = books.length + 1;

  const newBook = { id: newBookId, title, author };

  books.push(newBook);

  res.status(200);

  res.send(books);
  console.log(books);
});

server.put("/books/:id", (req: Request, res: Response) => {
  const params = req.params;
  const id = params.id;
  const { title, author } = req.body;
  // const updatedBooks = books.map((book) =>
  //   String(book.id) === String(id) ? { ...book, title, author } : book,
  // );
  const updatedBooks = books.map((book) => {
    if (String(book.id) === id) {
      const updatedBook = {
        id: book.id,
        title: title,
        author: author,
      };
      return updatedBook;
    } else {
      return book;
    }
  });

  res.status(200).send(updatedBooks);
});

server.delete("/delete/:type", (req: Request, res: Response) => {
  const params = req.params;
  const headers = req.headers;
  console.log(params, headers);
  res.status(200).json({ message: "deletetest" });
  res.send("Delete methodoor testlej baina");
});

server.listen(port, () => {
  console.log(`"Server aslaa", http://localhost:${port}`);
});
