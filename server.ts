import usersRouter from "./src/router/users.router";
import categoryRouter from "./src/router/categories.router";
import express from "express";
import foodsRouter from "./src/router/foods.router";

type Book = {
  id: number;
  title: string;
};

const server = express();
const port = 3001;

server.use(express.json());

/////////// users

server.use("/users", usersRouter);

/////////// FOOOOOD CATEGORY

server.use("/category", categoryRouter);

//////// FOOOOOOOODS

server.use("/foods", foodsRouter);

server.listen(port, () => {
  console.log(`"Server aslaa", http://localhost:${port}`);
});
