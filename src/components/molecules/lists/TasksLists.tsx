import { useEffect, useState } from "react";
import { Task } from "../../../models/task.model";
import { TaskList } from "./TaskList";

type Props = {
    tasks: Task[],
    updateTask: (task: Task) => void,
    deleteTask: (id: number) => void
}

export const TasksLists = (props: Props) => {

    const { tasks, updateTask, deleteTask } = props;

    const toBeDoneTasks = tasks?.filter(task => !task.done);

    const doneTasks = tasks?.filter(task => task.done);

    return (
        <div className="grid grid-3 width-100">
            <TaskList label="All" color="black" tasks={tasks}></TaskList>
            <TaskList label="To Be Done" color="green" tasks={toBeDoneTasks}></TaskList>
            <TaskList label="Done" color="green" tasks={doneTasks}></TaskList>
        </div>
    );
}