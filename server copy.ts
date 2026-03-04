import type { Request, Response } from "express";

import express from "express";
const server = express();
const port = 3001;

server.use(express.json());

server.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Ok" });
});

server.get("/student/:name", (req: Request, res: Response) => {
  const params = req.params;
  res.status(200).send({ message: `Сайн байна уу,[${params.name}]` });
});

server.get("/filter", (req: Request, res: Response) => {
  const query = req.query;
  res.status(200).json({ message: "amjilttai", query });
});

server.get("/header", (req: Request, res: Response) => {
  const headers = req.headers;
  console.log(headers.authorization);

  res.status(200).send("ok");
});

server.all("/duruv", (req: Request, res: Response) => {
  const path = req.path;
  const method = req.method;
  res.status(200).send(`Ta ${path} zamruu ${method} huselt ilgeelee.`);
});

server.get("/library/:category/:id", (req: Request, res: Response) => {
  const headers = req.headers;
  const { id, category } = req.params;
  // const id = params.id;
  const method = req.method;
  const path = req.path;
  // const category = params[1];
  const query = req.query;

  const authorization = headers.authorization?.split(" ")[1];
  if (authorization === "test") {
    headers["x-api-key"] = authorization;
  } else {
    res.send("Not verified");
  }

  res.status(200).send({
    status: "Success",
    requestInfo: {
      method,
      path,
      category,
      id,
      query,
      auth: "Verified",
    },
  });
});

server.listen(port, () => {
  console.log(`"Server aslaa", http://localhost:${port}`);
});
