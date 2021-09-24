const add = (tasks, input) => {
  const task = {
    description: input,
    completed: false,
    index: tasks.length + 1,
  };
  tasks.push(task);
  return tasks;
};

const shiftIndex = (tasks, taskIndex) => {
  tasks = tasks.map((task) => {
    if (task.index > taskIndex) {
      task.index -= 1;
    }
    return task;
  });
  return tasks;
};

const remove = (tasks, task) => {
  const taskIndex = tasks.findIndex((item) => (item.index === task.index));
  tasks = tasks.filter((item) => (item.index !== task.index));
  tasks = shiftIndex(tasks, taskIndex);
  return tasks;
};

const edit = (tasks, task, desc) => {
  console.log(task.index);
  tasks.find((item) => item.index === task.index).description = desc;
  console.log({
    tasks,
    desc,
  });
  return tasks;
};

const clear = (tasks) => {
  tasks = tasks.filter((item) => !(item.completed));
  return tasks;
};

export {
  add,
  remove,
  edit,
  clear,
};
