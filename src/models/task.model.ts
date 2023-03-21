export interface Task {
    title: string;
    text: string;
    emoji: string;
    done: boolean;
    toBeDone: Date;
    createdAt: Date;
}