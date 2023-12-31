import Project from './project-class.js';
import {projects} from './project-data.js';

const editProject = document.querySelector('.edit-btn');
editProject.addEventListener('click', () => {
    const mainTitleDiv = document.querySelector('.main-title-div');
    const mainTitle = document.querySelector('.main-title');
    mainTitle.classList.add('hidden');

    const editDiv = document.createElement('div');
    editDiv.classList.add('edit-div');
    mainTitleDiv.prepend(editDiv);

    const editInput = document.createElement('input');
    editInput.classList.add('edit-input');
    editInput.value = mainTitle.textContent;
    editDiv.appendChild(editInput);

    const doneBtn = document.createElement('button');
    doneBtn.classList.add('done-btn');
    doneBtn.textContent = 'Done';
    editDiv.appendChild(doneBtn);

    doneBtn.addEventListener('click', () => {
        const proj = getProj();
        const projectEl = getProjEl(proj);
        proj.edit(editInput.value);

        editDiv.classList.add('hidden');
        mainTitle.classList.remove('hidden');

        mainTitle.textContent = editInput.value;
        projectEl.textContent = editInput.value;
        return;
    })
})

const getProj = () => {
    const mainTitle = document.querySelector('.main-title');
    for (const proj of projects) {
        if (proj.name === mainTitle.textContent) {
            return proj;
        }
    }
}

const getProjEl = (proj) => {
    const projectElements = document.querySelectorAll('.project-names');
    for (const projectEl of projectElements) {
        if (projectEl.textContent == proj.name) {
            console.log('Project El: ', projectEl);
            return projectEl;
        }
    }
}

const deleteProject = document.querySelector('.delete-btn');