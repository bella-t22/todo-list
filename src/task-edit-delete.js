import {projects} from './project-data.js';

function editTask() {
    const taskHeader = document.querySelector('.task-header');
    const taskBottomDiv = document.querySelector('.task-bottom-div');
    const taskTitle = document.querySelector('.task-title');
    const taskDesc = document.querySelector('.task-desc');
    const editTaskBtn = document.querySelector('.edit-task-btn');
    const btnDiv = document.querySelector('.task-btns-div');

    taskTitle.classList.add('hidden');
    taskDesc.classList.add('hidden');
    editTaskBtn.classList.add('hidden');
    
    const titleInput = document.createElement('input');
    titleInput.classList.add('edit-title-input');
    titleInput.value = taskTitle.textContent;
    taskHeader.prepend(titleInput);

    const descInput = document.createElement('input');
    descInput.classList.add('edit-desc-input');
    descInput.value = taskDesc.textContent;
    taskBottomDiv.prepend(descInput);

    const doneBtn = document.createElement('button');
    doneBtn.classList.add('task-done-btn');
    doneBtn.textContent = 'Done';
    btnDiv.prepend(doneBtn);

    doneBtn.addEventListener('click', () => {
        const task = getTask();
        task.edit(titleInput.value, descInput.value);

        taskTitle.textContent = titleInput.value;
        taskDesc.textContent = descInput.value;

        titleInput.classList.add('hidden');
        descInput.classList.add('hidden');
        doneBtn.classList.add('hidden');

        taskTitle.classList.remove('hidden');
        taskDesc.classList.remove('hidden');
        editTaskBtn.classList.remove('hidden');
    })

    const getProj = () => {
        const mainTitle = document.querySelector('.main-title');
        for (const proj of projects) {
            if (proj.name === mainTitle.textContent) {
                return proj;
            }
        }
    }

    const getTask = () => {
        const proj = getProj();
        const tasks = proj.tasks;
        const taskTitle = document.querySelector('.task-title');
        for (const task of tasks) {
            if (task.title === taskTitle.textContent) {
                return task;
            }
        }
    }
}

export {editTask};