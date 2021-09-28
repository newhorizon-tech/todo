import './style.css';

import flip from './flip';

import {
  add,
  remove,
  edit,
  clear,
} from './actions';

const getData = () => {
  let tasks = [];
  const data = localStorage.getItem('tasks');
  if (data != null) {
    tasks = JSON.parse(data);
  }
  return tasks;
};

const saveData = (tasks) => {
  tasks.sort((a, b) => a.index - b.index);
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const enableInput = () => {
  const editBtns = document.querySelectorAll('.edit-btn');
  editBtns.forEach((btn) => {
    btn.disabled = false;
  });
  document.querySelector('#input-field').disabled = false;
};

const disableInput = () => {
  const editBtns = document.querySelectorAll('.edit-btn');
  editBtns.forEach((btn) => {
    btn.disabled = true;
  });
  document.querySelector('#input-field').disabled = true;
};

class TaskList {
  constructor() {
    this.tasks = getData();
  }

  save() {
    saveData(this.tasks);
  }

  editList(task, e) {
    const originalDesc = e.target.parentElement.parentElement.querySelector('.description');

    originalDesc.contentEditable = 'true';
    originalDesc.focus();

    const originalButtons = originalDesc.parentElement.querySelector('.buttons');

    originalButtons.classList.add('display-none');

    const saveBtn = document.createElement('button');
    saveBtn.id = 'save-btn';
    saveBtn.textContent = 'Save';
    originalDesc.parentElement.append(saveBtn);

    saveBtn.addEventListener('click', () => {
      const input = originalDesc.textContent;
      originalDesc.contentEditable = false;
      this.tasks = edit(this.tasks, task, input);
      this.save();
      saveBtn.remove();
      originalButtons.classList.remove('display-none');
      enableInput();
    });
  }

  displayList() {
    document.querySelector('#input-field').disabled = false;
    this.tasks = getData();
    const listElement = document.querySelector('#list');
    listElement.innerHTML = '';
    this.tasks.forEach((task, i) => {
      const taskElement = document.createElement('li');

      const check = document.createElement('input');
      check.type = 'checkbox';
      check.checked = task.completed;

      check.addEventListener('change', () => {
        this.tasks[i] = flip(task);
        saveData(this.tasks);
      });

      const desc = document.createElement('span');
      desc.textContent = task.description;
      desc.className = 'description';

      const editBtn = document.createElement('button');
      editBtn.textContent = 'Edit';
      editBtn.className = 'edit-btn';

      editBtn.addEventListener('click', (e) => {
        disableInput();
        this.editList(task, e);
      });

      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';

      deleteBtn.addEventListener('click', () => {
        this.tasks = remove(this.tasks, task);
        saveData(this.tasks);
        this.displayList();
      });

      const buttons = document.createElement('span');
      buttons.className = 'buttons';
      buttons.append(editBtn, deleteBtn);

      taskElement.append(check, desc, buttons);
      listElement.append(taskElement);
    });
  }

  clearCompleted() {
    this.tasks = clear(this.tasks);
    this.save();
    this.displayList();
  }

  inputTask(formElement) {
    const input = formElement.value;
    formElement.value = '';
    this.tasks = add(this.tasks, input);
    saveData(this.tasks);
    this.displayList();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const myTodo = new TaskList();
  myTodo.displayList();

  const refreshBtn = document.querySelector('#refresh');
  refreshBtn.addEventListener('click', () => {
    myTodo.displayList();
  });

  const formElement = document.querySelector('#input-field');
  formElement.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      myTodo.inputTask(formElement);
    }
  });

  const clearBtn = document.querySelector('#clear-btn');
  clearBtn.addEventListener('click', () => myTodo.clearCompleted());
});
