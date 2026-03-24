import type { Request, Response } from "express";

import express from "express";
const server = express();
const port = 3001;

let todos = [
  {
    id: 1,
    task: "Delguur oroh",
    isComplete: false,
  },
  {
    id: 2,
    task: "Undug awah",
    isComplete: false,
  },
  {
    id: 3,
    task: "Talh awah",
    isComplete: false,
  },
];
server.use(express.json());
server.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Ok" });
});

server.get("/tasks", (req: Request, res: Response) => {
  res.status(200).json(todos);
});
server.get("/tasks/:id", (req: Request, res: Response) => {
  const params = req.params;
  const id = params.id;
  const task = todos.find((task) => String(task.id) === String(id));
  res.status(200).json(task);
});

server.post("/tasks", (req: Request, res: Response) => {
  const { task, isComplete } = req.body;

  const newTaskId = todos.length + 1;

  const newTask = { id: newTaskId, task, isComplete };

  todos.push(newTask);

  res.status(200);

  res.send(todos);
  console.log(todos);
});

server.put("/tasks/:id", (req: Request, res: Response) => {
  const params = req.params;
  const id = params.id;
  const { task, isComplete } = req.body;

  const updatedTasks = todos.map((todo) => {
    if (String(todo.id) === id) {
      const updatedTask = {
        id: todo.id,
        task: task,
        isComplete: isComplete,
      };
      return updatedTask;
    } else {
      return todo;
    }
  });

  todos = updatedTasks;

  res.status(200).send(todos);
});

server.delete("/tasks/:id", (req: Request, res: Response) => {
  const params = req.params;
  const id = params.id;
  const findTask = todos.find((task) => String(task.id) === id);
  if (!findTask) {
    res.status(404).send("Not found");
    return;
  }
  const filteredTasks = todos.filter((task) => String(task.id) !== id);
  todos = filteredTasks;

  res.status(200).send(todos);
});

server.listen(port, () => {
  console.log(`"Server aslaa", http://localhost:${port}`);
});
