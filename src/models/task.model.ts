export class Task {
    id: number;
    title: string;
    text: string;
    done: boolean;
    toBeDone: Date;
    doneAt: Date;
    updatedAt: Date;
    createdAt: Date;

    constructor(
        id: number,
        title: string,
        text: string,
        done: boolean,
        toBeDone: Date,
        doneAt: Date,
        updatedAt: Date,
        createdAt: Date
    ){
        this.id = id;
        this.title = title;
        this.text = text;
        this.done = done;
        this.toBeDone = toBeDone;
        this.doneAt = doneAt;
        this.updatedAt = updatedAt;
        this.createdAt = createdAt;
    }
}