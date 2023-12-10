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
projectCard.appendChild(task);

const taskHeader = document.createElement('div');
taskHeader.classList.add('task-header');
task.appendChild(taskHeader);

const taskTitle = document.createElement('h3');
taskTitle.classList.add('task-title');
taskTitle.textContent = 'First Task';
taskHeader.appendChild(taskTitle);

const taskDueDiv = document.createElement('div');
taskDueDiv.classList.add('task-due-div');
taskHeader.appendChild(taskDueDiv);

const taskDesc = document.createElement('p');
taskDesc.classList.add('task-desc');
taskDesc.textContent = 'This is my task description.';
task.appendChild(taskDesc);

const taskDueDate = document.createElement('p');
taskDueDate.classList.add('task-due-date');
taskDueDate.textContent = '12/27';
taskDueDiv.appendChild(taskDueDate);

const taskPriority = document.createElement('div');
taskPriority.classList.add('task-priority');
taskDueDiv.appendChild(taskPriority);

// create default project for todos to be added to
// create project button to create new projects
// create todos button to create new todos
// drag and drop to change todos placement?
