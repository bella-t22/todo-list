import {projects} from './project-data.js';

const editProject = document.querySelector('.edit-btn');
editProject.addEventListener('click', () => {
    checkEditDiv();
})

const editPopup = () => {
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
}

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
            return projectEl;
        }
    }
}

const deleteProject = document.querySelector('.delete-btn');
deleteProject.addEventListener('click', () => {
    const proj = getProj();
    const projEl = getProjEl(proj);
    proj.delete(proj);

    const main = document.querySelector('.main');
    const mainWrap = document.querySelector('.main-wrap');
    mainWrap.classList.add('hidden');
    const empty = document.createElement('p');
    empty.classList.add('empty');
    empty.textContent = 'Click on a project to display...';
    main.appendChild(empty);

    const sidebar = document.querySelector('.sidebar');
    sidebar.removeChild(projEl);
    return;
})

const checkEditDiv = () => {
    const editDiv = document.querySelector('.edit-div');
    if (editDiv) {
        return;
    } else {
        editPopup();
    }
}