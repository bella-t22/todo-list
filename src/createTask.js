import {taskPopup} from './taskPopup.js';
import {projects} from './project-data.js';
import Task from './task-class.js';

// add checkbox to check when task is done
// task should not be added if inputs are empty
// add an edit and a delete button to each task
setTimeout(() => {
    const addTaskBtn = document.querySelector('.add-task-btn');
console.log(addTaskBtn)
addTaskBtn.addEventListener('click', () => {
    const popup = document.querySelector('.task-popup');
    if (popup) {
        return;
    } else {
        taskPopup();
    }
    // button should not be allowed to be pressed if inputs are empty.
    const submitTask = document.querySelector('.submit-task');
    submitTask.addEventListener('click', createTask);
}), 500
})


// function createTask() {

//     const projectCard = document.querySelector('.project-card');    
//         const task = document.createElement('div');
//         task.classList.add('task');
//         projectCard.appendChild(task);

//         const taskHeader = document.createElement('div');
//         taskHeader.classList.add('task-header');
//         task.appendChild(taskHeader);

//         const taskTitle = document.createElement('h3');
//         taskTitle.classList.add('task-title');
//         const taskInput = document.querySelector('.task-input');
//         taskTitle.textContent = taskInput.value;
//         taskHeader.appendChild(taskTitle);

//         const taskDueDiv = document.createElement('div');
//         taskDueDiv.classList.add('task-due-div');
//         taskHeader.appendChild(taskDueDiv);

//         const taskBottomDiv = document.createElement('div');
//         taskBottomDiv.classList.add('task-bottom-div');
//         task.appendChild(taskBottomDiv);

//         const taskDesc = document.createElement('p');
//         taskDesc.classList.add('task-desc');
//         const descInput = document.querySelector('.desc-input');
//         taskDesc.textContent = descInput.value;
//         taskBottomDiv.appendChild(taskDesc);

//         const taskDueDate = document.createElement('p');
//         taskDueDate.classList.add('task-due-date');
//         const dateInput = document.querySelector('.date-input');
//         taskDueDate.textContent = dateInput.value;
//         taskDueDiv.appendChild(taskDueDate);

//         const radioInput = document.querySelector("input[type='radio']:checked");
//         if (radioInput.value == 'red') {
//             const taskPriority = document.createElement('div');
//             taskPriority.classList.add('red-label');
//             taskDueDiv.appendChild(taskPriority);
//         } else if (radioInput.value == 'orange') {
//             const taskPriority = document.createElement('div');
//             taskPriority.classList.add('orange-label');
//             taskDueDiv.appendChild(taskPriority);
//         } else if (radioInput.value == 'yellow') {
//             const taskPriority = document.createElement('div');
//             taskPriority.classList.add('yellow-label')
//             taskDueDiv.appendChild(taskPriority);
//         }

//         const btnDiv = document.createElement('div');
//         btnDiv.classList.add('task-btns-div');
//         taskBottomDiv.appendChild(btnDiv);

//         const editBtn = document.createElement('button');
//         editBtn.classList.add('edit-task-btn');
//         editBtn.textContent = 'Edit';
//         btnDiv.appendChild(editBtn);

//         const deleteBtn = document.createElement('button');
//         deleteBtn.classList.add('delete-task-btn');
//         deleteBtn.textContent = 'Delete';
//         btnDiv.appendChild(deleteBtn);

//         const project = getProject();
//         console.log(project);
//         project.addTask(taskInput.value, descInput.value, dateInput.value, radioInput.value);

//         taskInput.value = '';
//         descInput.value = '';
//         dateInput.value = '';
// }
function createTask(arg) {
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

        taskHeader.appendChild(taskTitle);

        const taskDueDiv = document.createElement('div');
        taskDueDiv.classList.add('task-due-div');
        taskHeader.appendChild(taskDueDiv);

        const taskBottomDiv = document.createElement('div');
        taskBottomDiv.classList.add('task-bottom-div');
        task.appendChild(taskBottomDiv);

        const taskDesc = document.createElement('p');
        taskDesc.classList.add('task-desc');
        const descInput = document.querySelector('.desc-input');

        taskBottomDiv.appendChild(taskDesc);

        const taskDueDate = document.createElement('p');
        taskDueDate.classList.add('task-due-date');
        const dateInput = document.querySelector('.date-input');

        taskDueDiv.appendChild(taskDueDate);

        const radioInput = document.querySelector("input[type='radio']:checked");
        if (radioInput.value == 'red') {
            const taskPriority = document.createElement('div');
            taskPriority.classList.add('red-label');
            taskDueDiv.appendChild(taskPriority);
        } else if (radioInput.value == 'orange') {
            const taskPriority = document.createElement('div');
            taskPriority.classList.add('orange-label');
            taskDueDiv.appendChild(taskPriority);
        } else if (radioInput.value == 'yellow') {
            const taskPriority = document.createElement('div');
            taskPriority.classList.add('yellow-label')
            taskDueDiv.appendChild(taskPriority);
        }

        const btnDiv = document.createElement('div');
        btnDiv.classList.add('task-btns-div');
        taskBottomDiv.appendChild(btnDiv);

        const editBtn = document.createElement('button');
        editBtn.classList.add('edit-task-btn');
        editBtn.textContent = 'Edit';
        btnDiv.appendChild(editBtn);

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-task-btn');
        deleteBtn.textContent = 'Delete';
        btnDiv.appendChild(deleteBtn);

        if(arg instanceof Task) {
            displayTaskValues(taskTitle, taskDesc, taskDueDate, arg)
        } else {
            setValues(taskTitle, taskDesc, taskDueDate, radioInput, taskInput, descInput, dateInput)
        }

        taskInput.value = '';
        descInput.value = '';
        dateInput.value = '';

}

function setValues (task, desc, date, radio, taskInput, descInput, dateInput) {
    const project = getProject();
    task.textContent = taskInput.value;
    desc.textContent = descInput.value;
    date.textContent = dateInput.value;
    project.addTask(taskInput.value, descInput.value, dateInput.value, radio.value);
}

function displayTaskValues (title, desc, date, obj){
    title.textContent = obj.title;
    desc.textContent = obj.desc;
    date.textContent = obj.date;
}
 
function getProject() {
    const mainTitle = document.querySelector('.main-title');
    for(const project of projects){
        console.log(project)
        if (project.name === mainTitle.textContent) {
            return project;
        }  
    }
}

export {createTask};