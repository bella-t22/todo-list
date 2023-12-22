const addProjectBtn = document.querySelector('.add-project');

addProjectBtn.addEventListener('click', () => {
    const addProjectDiv = document.querySelector('.add-project-div');

    const popup = document.createElement('div');
    popup.classList.add('project-popup');
    addProjectDiv.appendChild(popup);

    const inputLabel = document.createElement('label');
    inputLabel.classList.add('project-input-label');
    inputLabel.textContent = 'Project Name:';
    popup.appendChild(inputLabel);

    const input = document.createElement('input');
    input.classList.add('form-input');
    popup.appendChild(input);

    const submit = document.createElement('btn');
    submit.classList.add('add-project-btn');
    submit.textContent = 'Add';
    popup.appendChild(submit);

    submit.addEventListener('click', addProject);

    function addProject() {
        const sidebar = document.querySelector('.sidebar');

        const project = document.createElement('p');
        project.classList.add('project-names');
        project.textContent = input.value;
        sidebar.appendChild(project);

        // create individual project card for every new project and give it a unique class?
        // const mainContent = document.querySelector('.main-content');
        // const projectCard = document.createElement('div');
        // projectCard.classList.add('project-card');
        // mainContent.appendChild(projectCard);

        // close popup once add button is pressed.
        const popup = document.querySelector('.project-popup');
        popup.classList.add('hidden');
        return;
    }
});