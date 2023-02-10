const tasks = [
  { id: 1, task: "Fazer compras" },
  { id: 2, task: "Lavar louças" },
  { id: 3, task: "Lavar roupa" },
];

const updateTask = (taskId, taskBody) => {
  const taskIndex = tasks.findIndex((t) => t.id == taskId);

  if (taskIndex >= 0) {
    tasks[taskIndex] = { id: taskId, task: taskBody };

    return tasks[taskIndex];
 
  } else {
    return null;
  }
};

const createTask = (taskBody) => {
  const lastTaskId = tasks[tasks.length - 1].id;

  const newTask = { id: lastTaskId + 1, task: taskBody };

  tasks.push(newTask);

  return newTask;
};

export default {
  tasks,
  updateTask,
  createTask,
};
