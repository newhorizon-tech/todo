import './style.css';

import {
  flip,
} from './task';

let tasks = [];

const initialData = (tasks) => {
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
  return tasks;
};

const getData = (tasks) => {
  const data = localStorage.getItem('tasks');
  if (data != null) {
    tasks = JSON.parse(data);
  } else {
    tasks = initialData([]);
  }
  return tasks;
};

const saveData = (tasks) => {
  console.log(tasks);
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const displayList = () => {
  tasks.sort((a, b) => a.index - b.index);
  const listElement = document.querySelector('#list');
  listElement.innerHTML = '';
  tasks.forEach((task, i) => {
    const taskElement = document.createElement('li');

    const check = document.createElement('input');
    check.type = 'checkbox';
    check.checked = task.completed;

    check.addEventListener('change', () => {
      tasks[i] = flip(task);
      saveData(tasks);
    });

    const desc = document.createElement('span');
    desc.textContent = task.description;

    taskElement.append(check, desc);
    listElement.append(taskElement);
  });
};

document.addEventListener('DOMContentLoaded', () => {
  tasks = getData();
  displayList();
});
