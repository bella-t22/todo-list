import Project from './project-class.js';
import {projects} from './project-data.js';
import {displayProject} from './display-project.js';

function projectPopup() {
    const popup = document.querySelector('.project-popup');

    const inputLabel = document.createElement('label');
    inputLabel.classList.add('project-input-label');
    inputLabel.textContent = 'Project Name:';
    popup.appendChild(inputLabel);

    const input = document.createElement('input');
    input.classList.add('form-input');
    input.classList.add('project-name-input')
    popup.appendChild(input);

    const submit = document.createElement('btn');
    submit.classList.add('add-project-btn');
    submit.textContent = 'Add';
    popup.appendChild(submit);

    submit.addEventListener('click', addProject);
}

function addProject() {
    const input = document.querySelector('.project-name-input');
    const proj = new Project(input.value);
    projects.push(proj);
    console.log(projects);

    const sidebar = document.querySelector('.sidebar');

    const projectEl = document.createElement('p');
    projectEl.classList.add('project-names');
    projectEl.textContent = input.value;
    sidebar.appendChild(projectEl);

    projectEl.addEventListener('click', () => {
        displayProject(proj);
    })

    const projectPopupDiv = document.querySelector('.project-popup');
    projectPopupDiv.innerHTML = '';
    return;
}

export {projectPopup};