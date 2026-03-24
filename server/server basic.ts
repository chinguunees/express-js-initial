import type { Request, Response } from "express";

import express from "express";
const server = express();
const port = 3001;
server.get("/movie/:type", (req: Request, res: Response) => {
  const query = req.query;
  const params = req.params;
  const headers = req.headers;

  const expectedToken = "mytesttoken123";

  const newToken: any = headers.authorization?.split(" ");
  const daalgavarToken = newToken.pop();

  if (daalgavarToken !== expectedToken) return res.status(403).json("fail");

  console.log("new token", newToken);
  console.log("token", headers.authorization?.slice(6));
  console.log("language ", query);
  console.log("Popular", params);
  res.status(200).json({ message: "Ok" });
});

server.post("/books/:type", (req: Request, res: Response) => {
  const params = req.params;
  const headers = req.headers;
  console.log(headers);
  console.log(params);

  res.status(200).json("test post");

  res.send("Post methodoor testlew");
});

server.put("/put/:type", (req: Request, res: Response) => {
  const params = req.params;
  const headers = req.headers;
  console.log(params);
  console.log(headers);
  res.status(200).json({ message: "put test" });

  res.send("Put methodoor testlew");
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
