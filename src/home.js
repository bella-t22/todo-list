import addFirstProject from "./first-project";'./first-project.js';

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

const projectBtnDiv = document.createElement('div');
projectBtnDiv.classList.add('project-btn-div');
addProjectDiv.appendChild(projectBtnDiv);

const addProject = document.createElement('button');
addProject.classList.add('add-project');
addProject.textContent = '+ Add Project';
projectBtnDiv.appendChild(addProject);

const popup = document.createElement('div');
popup.classList.add('project-popup');
addProjectDiv.appendChild(popup);

const mainWrap = document.createElement('div');
mainWrap.classList.add('main-wrap');
main.appendChild(mainWrap);

const mainTitleDiv = document.createElement('div');
mainTitleDiv.classList.add('main-title-div');
mainWrap.appendChild(mainTitleDiv);

addFirstProject();

const mainBtnsDiv = document.createElement('div');
mainBtnsDiv.classList.add('main-btns-div');
mainTitleDiv.appendChild(mainBtnsDiv);

const editBtn = document.createElement('button');
editBtn.classList.add('edit-btn');
editBtn.textContent = 'Edit';
mainBtnsDiv.appendChild(editBtn);

const deleteBtn = document.createElement('button');
deleteBtn.classList.add('delete-btn');
deleteBtn.textContent = 'Delete';
mainBtnsDiv.appendChild(deleteBtn);

const addTaskDiv = document.createElement('div');
addTaskDiv.classList.add('add-task-div');
mainWrap.appendChild(addTaskDiv);

const addTaskBtn = document.createElement('button');
addTaskBtn.classList.add('add-task-btn');
addTaskBtn.textContent = '+ Add Task';
addTaskDiv.appendChild(addTaskBtn);

const mainContent = document.createElement('div');
mainContent.classList.add('main-content');
mainWrap.appendChild(mainContent);

const projectCard = document.createElement('div');
projectCard.classList.add('project-card');
mainContent.appendChild(projectCard);