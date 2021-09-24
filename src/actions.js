const add = (tasks, input) => {
  const task = {
    description: input,
    completed: false,
    index: tasks.length + 1,
  };
  tasks.push(task);
  return tasks;
};

const remove = (tasks, task) => {
  tasks = tasks.filter((item) => (item.index !== task.index));
  return tasks;
};

export {
  add,
  remove,
};
