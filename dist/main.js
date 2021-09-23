/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module './style.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7O0FDTnFCOztBQUVyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuY29uc3QgdGFza3MgPSBbXTtcblxuY29uc3QgdGFzazEgPSB7XG4gIGRlc2NyaXB0aW9uOiAnV2FzaCB0aGUgZGlzaGVzJyxcbiAgY29tcGxldGVkOiBmYWxzZSxcbiAgaW5kZXg6IDMsXG59O1xuXG5jb25zdCB0YXNrMiA9IHtcbiAgZGVzY3JpcHRpb246ICdDbGVhbiBteSByb29tJyxcbiAgY29tcGxldGVkOiBmYWxzZSxcbiAgaW5kZXg6IDEsXG59O1xuXG5jb25zdCB0YXNrMyA9IHtcbiAgZGVzY3JpcHRpb246ICdNYWtlIGJyZWFrZmFzdCcsXG4gIGNvbXBsZXRlZDogZmFsc2UsXG4gIGluZGV4OiAyLFxufTtcblxudGFza3MucHVzaCh0YXNrMSwgdGFzazIsIHRhc2szKTtcblxuY29uc3QgZGlzcGxheUxpc3QgPSAoKSA9PiB7XG4gIHRhc2tzLnNvcnQoKGEsIGIpID0+IGEuaW5kZXggLSBiLmluZGV4KTtcbiAgY29uc3QgbGlzdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGlzdCcpO1xuICBsaXN0RWxlbWVudC5pbm5lckhUTUwgPSAnJztcbiAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGNvbnN0IHRhc2tFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICAgIGNvbnN0IGNoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjaGVjay50eXBlID0gJ2NoZWNrYm94JztcblxuICAgIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgZGVzYy50ZXh0Q29udGVudCA9IHRhc2suZGVzY3JpcHRpb247XG5cbiAgICB0YXNrRWxlbWVudC5hcHBlbmQoY2hlY2ssIGRlc2MpO1xuICAgIGxpc3RFbGVtZW50LmFwcGVuZCh0YXNrRWxlbWVudCk7XG4gIH0pO1xufTtcblxuZGlzcGxheUxpc3QoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==