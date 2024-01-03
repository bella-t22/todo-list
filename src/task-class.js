export default class Task {
    constructor(title, desc, date, priority) {
        this.title = title;
        this.desc = desc;
        this.date = date;
        this.priority = priority;
    }

    edit(title, desc) {
        this.title = title;
        this.desc = desc;
    }

    delete(proj, task) {
        const tasks = proj.tasks;
        for (const oneTask of tasks) {
            if (task.title === oneTask.title) {
                const index = tasks.indexOf(oneTask);
                tasks.splice(index, 1);
                return;
            }
        }
    }
}