import './style.css';

const tasks = [];

const task1 = {
  description: 'Wash the dishes',
  completed: false,
  index: 3,
};

const task2 = {
  description: 'Clean my room',
  completed: false,
  index: 1,
};

const task3 = {
  description: 'Make breakfast',
  completed: false,
  index: 2,
};

tasks.push(task1, task2, task3);

const displayList = () => {
  tasks.sort((a, b) => a.index - b.index);
  const listElement = document.querySelector('#list');
  listElement.innerHTML = '';
  tasks.forEach((task) => {
    const taskElement = document.createElement('li');

    const check = document.createElement('input');
    check.type = 'checkbox';

    const desc = document.createElement('span');
    desc.textContent = task.description;

    taskElement.append(check, desc);
    listElement.append(taskElement);
  });
};

displayList();
