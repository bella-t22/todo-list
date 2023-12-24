import {projectPopup} from './project-popup.js';
import Project from './project-class.js';
import {projects} from './project-data.js';

const addProjectBtn = document.querySelector('.add-project');
addProjectBtn.addEventListener('click', () => {
    checkPopup();

    const submit = document.querySelector('.add-project-btn');
    submit.addEventListener('click', addProject);
    function addProject() {
        const input = document.querySelector('.project-name-input');
        console.log(input.value)
        const proj = new Project(input.value);
        projects.push(proj);
        console.log(projects);
    
        const sidebar = document.querySelector('.sidebar');
    
        const projectEl = document.createElement('p');
        projectEl.classList.add('project-names');
        projectEl.textContent = input.value;
        sidebar.appendChild(projectEl);
    
        const projectPopupDiv = document.querySelector('.project-popup');
        projectPopupDiv.innerHTML = '';
        return;
    }
});

const checkPopup = () => {
    const inputLabel = document.querySelector('.project-input-label');
    if (inputLabel) {
        return;
    } else {
        projectPopup();
    }
}