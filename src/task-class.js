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
        for (each of tasks) {
            if (task.title === each.title) {
                const index = tasks.indexOf(each);
                tasks.splice(index, 1);
                return;
            }
        }
    }
}