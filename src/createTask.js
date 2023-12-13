import {taskPopup} from './taskPopup.js';

// make sure task popup cannot be added again if button is pressed again.
const addTaskBtn = document.querySelector('.add-task-btn');
addTaskBtn.addEventListener('click', () => {
    taskPopup();

    const submitTaskBtn = document.querySelector('.submit-task');
    submitTaskBtn.addEventListener('click', () => {

        const projectCard = document.querySelector('.project-card');    
        const task = document.createElement('div');
        task.classList.add('task');
        projectCard.appendChild(task);

        const taskHeader = document.createElement('div');
        taskHeader.classList.add('task-header');
        task.appendChild(taskHeader);

        const taskTitle = document.createElement('h3');
        taskTitle.classList.add('task-title');
        const taskInput = document.querySelector('.task-input');
        taskTitle.textContent = taskInput.value;
        taskHeader.appendChild(taskTitle);

        const taskDueDiv = document.createElement('div');
        taskDueDiv.classList.add('task-due-div');
        taskHeader.appendChild(taskDueDiv);

        const taskDesc = document.createElement('p');
        taskDesc.classList.add('task-desc');
        const descInput = document.querySelector('.desc-input');
        taskDesc.textContent = descInput.value;
        task.appendChild(taskDesc);

        const taskDueDate = document.createElement('p');
        taskDueDate.classList.add('task-due-date');
        const dateInput = document.querySelector('.date-input');
        taskDueDate.textContent = dateInput.value;
        taskDueDiv.appendChild(taskDueDate);


        // const radioInput = document.querySelectorAll('.radio');
        // console.log(radioInput.checked);

// const taskPriority = document.createElement('div');
// taskPriority.classList.add('task-priority');
// taskDueDiv.appendChild(taskPriority);
    })
});
