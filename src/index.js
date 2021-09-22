import './style.scss'

console.log("Javascript works!")

const tasks = [];

const task1 = {
  description: "Wash the dishes",
  completed: false,
  index: 1
}

const task2 = {
  description: "Clean the room",
  completed: false,
  index: 2
}

tasks.push(task1,task2);

const displayList = () => {
  const listElement = document.querySelector("#list");
  tasks.forEach((task) => {
     const taskElement = document.createElement("li");
     taskElement.textContent = task.description;
     listElement.append(taskElement);
  })
}

displayList();
