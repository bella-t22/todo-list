import {taskPopup} from './taskPopup.js';
import {projects} from './project-data.js';

// add checkbox to check when task is done
// task should not be added if inputs are empty
// add an edit and a delete button to each task

const addTaskBtn = document.querySelector('.add-task-btn');
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
});

function createTask() {

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

        const taskBottomDiv = document.createElement('div');
        taskBottomDiv.classList.add('task-bottom-div');
        task.appendChild(taskBottomDiv);

        const taskDesc = document.createElement('p');
        taskDesc.classList.add('task-desc');
        const descInput = document.querySelector('.desc-input');
        taskDesc.textContent = descInput.value;
        taskBottomDiv.appendChild(taskDesc);

        const taskDueDate = document.createElement('p');
        taskDueDate.classList.add('task-due-date');
        const dateInput = document.querySelector('.date-input');
        taskDueDate.textContent = dateInput.value;
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

        // checkmark creation for when task is finished below
        // const check = document.createElement('input');
        // check.classList.add('task-check');
        // check.type = 'checkbox';
        // task.appendChild(check);

        const project = getProject();
        console.log(project);
        project.addTask(taskInput.value, descInput.value, dateInput.value, radioInput.value);

        taskInput.value = '';
        descInput.value = '';
        dateInput.value = '';
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