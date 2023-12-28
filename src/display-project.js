import { createTask } from "./createTask";

export const displayProject = (proj) => {
    const mainTitle = document.querySelector('.main-title');
    const projectCard = document.querySelector('.project-card');
    
    mainTitle.textContent = proj.name;

    projectCard.innerHTML = '';
    for (let i = 0; i < proj.tasks.length; i++) {
        console.log(proj.tasks[i])
        createTask(proj.tasks[i]);
    }
}