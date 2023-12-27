import {projects} from './project-data';
import Task from './task-class.js';

export default class Project {
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }

    addTask(title, desc, date, priority) {
        const task = new Task(title, desc, date, priority);
        this.tasks.push(task);
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