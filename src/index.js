import './style.css';

import flip from './flip';

import {
  add, remove, edit, clear,
} from './actions';

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
    desc.className = 'description';

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';

    editBtn.addEventListener('click', () => {
      const originalDesc = task.description;
      editBtn.classList.add('display-none');

      const editBox = document.querySelector('#edit-box');
      editBox.classList.remove('display-none');

      const editField = document.querySelector('#edit-input');
      editField.value = originalDesc;
      const saveBtn = document.querySelector('#save-btn');
      saveBtn.addEventListener('click', () => {
        const editField = document.querySelector('#edit-input');
        const input = editField.value;
        tasks = edit(tasks, task, input);
        editBox.classList.add('display-none');
        saveData(tasks);
      });
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';

    deleteBtn.addEventListener('click', () => {
      tasks = remove(tasks, task);
      saveData(tasks);
      displayList();
    });

    const buttons = document.createElement('span');
    buttons.className = 'buttons';
    buttons.append(editBtn, deleteBtn);

    taskElement.append(check, desc, buttons);
    listElement.append(taskElement);
  });
};

const formElement = document.querySelector('#input-field');

formElement.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const input = formElement.value;
    formElement.value = '';
    tasks = add(tasks, input);
    saveData(tasks);
    displayList(tasks);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  tasks = getData();
  displayList();
});

const refreshBtn = document.querySelector('#refresh');
refreshBtn.addEventListener('click', displayList);

const clearBtn = document.querySelector('#clear-btn');
clearBtn.addEventListener('click', () => {
  tasks = clear(tasks);
  displayList();
});
