import {projectPopup} from './project-popup.js';

const addProjectBtn = document.querySelector('.add-project');
addProjectBtn.addEventListener('click', () => {
    checkPopup();
});

const checkPopup = () => {
    const inputLabel = document.querySelector('.project-input-label');
    if (inputLabel) {
        return;
    } else {
        projectPopup();
    }
}