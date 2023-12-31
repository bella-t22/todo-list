import { createTask } from "./createTask";

export const displayProject = (proj) => {
    const mainTitle = document.querySelector('.main-title');
    const projectCard = document.querySelector('.project-card');
    const empty = document.querySelector('.empty');

    if (!empty.classList.contains('hidden')) {
        empty.classList.add('hidden');

        const mainWrap = document.querySelector('.main-wrap');
        mainWrap.classList.remove('hidden');
    }
    
    mainTitle.textContent = proj.name;

    projectCard.innerHTML = '';
    for (let i = 0; i < proj.tasks.length; i++) {
        console.log(proj.tasks[i])
        createTask(proj.tasks[i]);
    }
}