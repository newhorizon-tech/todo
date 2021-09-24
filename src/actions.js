const add = (tasks, input) => {
  const task = { description: input, completed: false, index: tasks.length + 1 };
  tasks.push(task);
  return tasks;
};

const remove = () => {
  console.log('Remove task');
};

export { add, remove };
