import getCreateIcon from './icons/create.svg';

const header = document.querySelector('.header');
const sidebar = document.querySelector('.sidebar');
const main = document.querySelector('.main');

const headerTitle = document.createElement('h1');
headerTitle.textContent = 'To-do List';
header.appendChild(headerTitle);

const sidebarTitle = document.createElement('h2');
sidebarTitle.textContent = 'Projects';
sidebar.appendChild(sidebarTitle);

const addProjectDiv = document.createElement('div');
addProjectDiv.classList.add('add-project-div');
sidebar.appendChild(addProjectDiv);

const createIcon = document.createElement('img');
createIcon.classList.add('create-icon');
// createIcon.src = getCreateIcon;
console.log(getCreateIcon)
addProjectDiv.appendChild(createIcon);

const addProject = document.createElement('p');
addProject.classList.add('add-project');
addProject.textContent = 'Add Project';
addProjectDiv.appendChild(addProject);

const firstProject = document.createElement('p');
firstProject.classList.add('project-names');
firstProject.textContent = 'First Project';
sidebar.appendChild(firstProject);

const mainTitle = document.createElement('h1');
mainTitle.classList.add('main-title');
mainTitle.textContent = 'First Project';
main.appendChild(mainTitle);

const projectCard = document.createElement('div');
projectCard.classList.add('project-card');
main.appendChild(projectCard);

const task = document.createElement('div');
task.classList.add('task');
task.textContent = 'First task';
projectCard.appendChild(task);

// create default project for todos to be added to
// create project button to create new projects
// create todos button to create new todos
// drag and drop to change todos placement?
