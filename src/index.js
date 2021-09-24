import './style.css';

import flip from './flip';

import {
  add, remove, edit, clear,
} from './actions';

let tasks = [];

const getData = () => {
  const data = localStorage.getItem('tasks');
  if (data != null) {
    tasks = JSON.parse(data);
  } else {
    tasks = [];
  }
  return tasks;
};

const saveData = (tasks) => {
  tasks.sort((a, b) => a.index - b.index);
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const editList = (tasks, task, e) => {
  const originalDesc = e.target.parentElement.parentElement.querySelector('.description').textContent;

  const editBox = document.querySelector('#edit-box');
  editBox.classList.remove('display-none');

  const editField = document.querySelector('#edit-input');
  editField.value = originalDesc;
  const saveBtn = document.querySelector('#save-btn');
  saveBtn.addEventListener('click', () => {
    const editField = document.querySelector('#edit-input');
    const input = editField.value;
    tasks = edit(tasks, task, input);
    saveData(tasks);
    editBox.classList.add('display-none');
  });
};

const displayList = () => {
  getData(tasks);
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
    editBtn.className = 'edit-btn';

    editBtn.addEventListener('click', (e) => {
      editBtn.disabled = true;
      editList(tasks, task, e);
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
refreshBtn.addEventListener('click', () => {
  saveData(tasks);
  displayList();
});

const clearBtn = document.querySelector('#clear-btn');
clearBtn.addEventListener('click', () => {
  tasks = clear(tasks);
  saveData(tasks);
  displayList();
});
