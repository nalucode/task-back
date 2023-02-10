const express = require("express");
const app = express();
const port = 3000;

const tasks = [
  { id: 1, task: "Fazer compras" },
  { id: 2, task: "Lavar louças" },
  { id: 3, task: "Lavar roupa" },
];

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
