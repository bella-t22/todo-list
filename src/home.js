const content = document.querySelector('#content');

const header = document.createElement('div');
header.classList.add('header');
content.appendChild(header);

const sidebar = document.createElement('div');
sidebar.classList.add('sidebar');
content.appendChild(sidebar);

const headerTitle = document.createElement('h1');
headerTitle.textContent = 'To-do List';
header.appendChild(headerTitle);

const sidebarTitle = document.createElement('h2');
sidebarTitle.textContent = 'Projects';
sidebar.appendChild(sidebarTitle);

// create default project for todos to be added to
// create project button to create new projects
// create todos button to create new todos
// drag and drop to change todos placement?
