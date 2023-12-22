const editProject = document.querySelector('.edit-btn');
editProject.addEventListener('click', () => {
    const mainTitleDiv = document.querySelector('.main-title-div');

    const mainTitle = document.querySelector('.main-title');
    mainTitle.classList.add('hidden');

    const editDiv = document.createElement('div');
    editDiv.classList.add('edit-div');
    mainTitleDiv.prepend(editDiv);

    // put current title name in input to edit.
    const editInput = document.createElement('input');
    editInput.classList.add('edit-input');
    editDiv.appendChild(editInput);

    const doneBtn = document.createElement('button');
    doneBtn.classList.add('done-btn');
    doneBtn.textContent = 'Done';
    editDiv.appendChild(doneBtn);

    doneBtn.addEventListener('click', () => {
        editDiv.classList.add('hidden');

        mainTitle.classList.remove('hidden');
        mainTitle.textContent = editInput.value;
        return;

        // we also want it to update the name of the project in the sidebar as well.
    })
})

const deleteProject = document.querySelector('.delete-btn');
