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

const edit = (tasks, task, desc) => {
  console.log(task.index);
  tasks.find((item) => item.index === task.index).description = desc;
  console.log({ tasks, desc });
  return tasks;
};

export {
  add,
  remove,
  edit,
};
