const taskPopup = () => {
    const mainContent = document.querySelector('.main-content');

    const popup = document.createElement('div');
    popup.classList.add('task-popup');
    mainContent.appendChild(popup);

    const popupTitle = document.createElement('h3');
    popupTitle.classList.add('popup-title');
    popupTitle.textContent = 'Add Task';
    popup.appendChild(popupTitle);

    const taskForm = document.createElement('form');
    taskForm.classList.add('task-form');
    taskForm.setAttribute('action', '/');
    popup.appendChild(taskForm);

    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task-div');
    taskForm.appendChild(taskDiv);

    const task = document.createElement('label');
    task.classList.add('task-label');
    task.textContent = 'Task:';
    taskDiv.appendChild(task);

    const taskInput = document.createElement('input');
    taskInput.classList.add('form-input');
    taskInput.classList.add('task-input');
    taskInput.type = 'text';
    taskDiv.appendChild(taskInput);

    const titleError = document.createElement('div');
    titleError.classList.add('title-error');
    titleError.classList.add('hidden');
    taskDiv.appendChild(titleError);

    const descDiv = document.createElement('div');
    descDiv.classList.add('task-div');
    taskForm.appendChild(descDiv);

    const desc = document.createElement('label');
    desc.classList.add('task-label');
    desc.textContent = 'Description:';
    descDiv.appendChild(desc);

    const descInput = document.createElement('input');
    descInput.classList.add('form-input');
    descInput.classList.add('desc-input');
    descInput.type = 'text';
    descDiv.appendChild(descInput);

    const dateDiv = document.createElement('div');
    dateDiv.classList.add('task-div');
    taskForm.appendChild(dateDiv);

    const date = document.createElement('label');
    date.classList.add('task-label');
    date.textContent = 'Date:';
    dateDiv.appendChild(date);

    const dateInput = document.createElement('input');
    dateInput.classList.add('form-input');
    dateInput.classList.add('date-input');
    dateInput.type = 'date';
    dateDiv.appendChild(dateInput);

    const priorityDiv = document.createElement('div');
    priorityDiv.classList.add('task-div');
    taskForm.appendChild(priorityDiv);

    const priority = document.createElement('label');
    priority.classList.add('task-label');
    priority.textContent = 'Priority:';
    priorityDiv.appendChild(priority);

    const radioContainer = document.createElement('div');
    radioContainer.classList.add('radio-container');
    priorityDiv.appendChild(radioContainer);

    const redDiv = document.createElement('div');
    redDiv.classList.add('radio-div');
    radioContainer.appendChild(redDiv);

    const redInput = document.createElement('input');
    redInput.classList.add('radio');
    redInput.setAttribute('name', 'radio-input');
    redInput.setAttribute('value', 'red');
    redInput.type = 'radio';
    redInput.checked = true;
    redDiv.appendChild(redInput);

    const red = document.createElement('div');
    red.classList.add('red-label');
    redDiv.appendChild(red);

    const orangeDiv = document.createElement('div');
    orangeDiv.classList.add('radio-div');
    radioContainer.appendChild(orangeDiv);

    const orangeInput = document.createElement('input');
    orangeInput.classList.add('radio');
    orangeInput.setAttribute('name', 'radio-input');
    orangeInput.setAttribute('value', 'orange');
    orangeInput.type = 'radio';
    orangeDiv.appendChild(orangeInput);

    const orange = document.createElement('div');
    orange.classList.add('orange-label');
    orangeDiv.appendChild(orange);

    const yellowDiv = document.createElement('div');
    yellowDiv.classList.add('radio-div');
    radioContainer.appendChild(yellowDiv);

    const yellowInput = document.createElement('input');
    yellowInput.classList.add('radio');
    yellowInput.setAttribute('name', 'radio-input');
    yellowInput.setAttribute('value', 'yellow');
    yellowInput.type = 'radio';
    yellowDiv.appendChild(yellowInput);

    const yellow = document.createElement('div');
    yellow.classList.add('yellow-label');
    yellowDiv.appendChild(yellow);

    const addBtn = document.createElement('btn');
    addBtn.classList.add('submit-task');
    addBtn.textContent = 'Add';
    addBtn.setAttribute('type', 'submit');
    taskForm.appendChild(addBtn);
};

export {taskPopup};