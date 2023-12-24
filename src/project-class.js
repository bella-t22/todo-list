import {projects} from './project-data';

export default class Project {
    constructor(name) {
        this.name = name;
    }

    addTask() {

    }

    edit(name) {
        this.name = name;
    }

    delete(name) {
        projects.forEach((project) => {
            if (project.name == name) {
                const index = projects.indexOf(project);
                projects.splice(index, 1);
                return;
            }
        })
    }
}