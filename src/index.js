const express = require("express");
const cors = require("cors")

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors())

const tasks = [
  { id: 1, task: "Fazer compras" },
  { id: 2, task: "Lavar louças" },
  { id: 3, task: "Lavar roupa" },
];

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.post("/tasks", (req, res) => {
  const body = req.body
  const lastTaskId = tasks[tasks.length - 1].id 

  console.log(body)

  if (body.task) {    
    tasks.push({ id: lastTaskId + 1, task: body.task })

    return res.status(201).send('Task created.')

  } else {
    return res.status(400).send('Malformed body')
  }
})

app.put("/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id)
  const body = req.body

  if (id && body.task != '') {
    const taskIndex = tasks.findIndex(t => t.id === id)

    if (taskIndex >= 0) {
      tasks[taskIndex] = { id, task: body.task}

      return res.status(200).send('Task updated.')

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
