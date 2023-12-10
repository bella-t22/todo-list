import {taskPopup} from './taskPopup.js';

const addTaskBtn = document.querySelector('.add-task-btn');
console.log(addTaskBtn);

// when button is clicked, create a popup that lets us add a task.
addTaskBtn.addEventListener('click', () => {
    taskPopup();
});