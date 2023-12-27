export const displayProject = (proj) => {
    const mainTitle = document.querySelector('.main-title');
    const submitTaskBtn = document.querySelector('.submit-task');
    const projectCard = document.querySelector('.project-card');  
    
    mainTitle.textContent = proj.name;

}