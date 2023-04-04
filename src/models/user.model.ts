export class User {
    name: string;
    totalTasks: number;
    tasksConcluded: number;
    createdAt: Date;

    constructor(
        name: string,
        totalTasks: number,
        tasksConcluded: number,
        createdAt: Date
    ) {
        this.name = name;
        this.totalTasks = totalTasks;
        this.tasksConcluded = tasksConcluded;
        this.createdAt = createdAt;
    }
}