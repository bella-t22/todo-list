import Project from './project-class.js';
import {projects} from './project-data.js';
import {displayProject} from './display-project.js';

export default function addFirstProject() {
    const name = 'First Project';
    const proj = new Project(name);
    projects.push(proj);
    console.log(projects);

    const sidebar = document.querySelector('.sidebar');

    const projectEl = document.createElement('p');
    projectEl.classList.add('project-names');
    projectEl.textContent = 'First Project';
    sidebar.appendChild(projectEl);

    const mainTitleDiv = document.querySelector('.main-title-div');
    console.log(mainTitleDiv);
    const mainTitle = document.createElement('h1');
    mainTitle.classList.add('main-title');
    mainTitle.textContent = 'First Project';
    mainTitleDiv.appendChild(mainTitle);

    // projectEl.addEventListener('click', () => {
    //     displayProject(proj);
    // })

    const projectPopupDiv = document.querySelector('.project-popup');
    projectPopupDiv.innerHTML = '';
    return;
}