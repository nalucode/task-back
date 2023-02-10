import cors from "cors";
import express from 'express';

import repository from "./repository.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors())

app.get("/tasks", (req, res) => {
  const tasks = repository.tasks

  return res.json(tasks);
});

app.post("/tasks", (req, res) => {
  const body = req.body

  if (body.task !== '') {
    const createdTask = repository.createTask(body.task)

    return res.status(201).json(createdTask)

  } else {
    return res.status(400).send('Malformed body.')
  }
})

app.put("/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id)
  const body = req.body

  if (id >= 0 && body.task !== '') {
    const updatedTask = repository.updateTask(id, body.task)

    if (updatedTask) {
      return res.status(200).json(updatedTask)
    
    } else {
      return res.status(404).send('Task not found.')
    }

  } else {
    return res.status(400).send('Malformed body.')
  }
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
