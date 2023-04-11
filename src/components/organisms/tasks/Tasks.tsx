import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Task } from "../../../models/task.model";
import { FlatButton } from "../../atoms/buttons/FlatButton";
import { TasksList } from "../../molecules/lists/TasksList";

type Props = {
    setTotalTasks: Dispatch<SetStateAction<number>>,
    setTasksConcluded: Dispatch<SetStateAction<number>>,
    saveUser: () => void
}

export const Tasks = (props: Props) => {

    const {setTotalTasks, setTasksConcluded, saveUser} = props;

    const [tasks, setTasks] = useState<Task[]>([]);

    const convertStringToTask = (string: string): Task => {
        const taskValues: Array<string> = string.split('§');
        return new Task(Number(taskValues[0]), taskValues[1], taskValues[2], Boolean(taskValues[3]), new Date(taskValues[4]), new Date(taskValues[5]));
    }

    const storeTask = (task: Task): void => {
        let taskToStorage: string = '';
        Object.values(task).forEach(value => taskToStorage += `${value}§`);
        localStorage.setItem(`task-${task.id}`, taskToStorage);
    }

    const createTask = (task: Task): void => {
        let clone: Task[] = JSON.parse(JSON.stringify(tasks));
        task.id = clone.length++;
        clone.push(task);
        setTasks(clone);
        setTotalTasks(clone.length);
        storeTask(task);
    }

    const updateTask = (task: Task): void => {
        let clone: Task[] = JSON.parse(JSON.stringify(tasks));
        let index: number = task.id--;
        clone[index] = task;
        setTasks(clone);
        storeTask(task);
    }

    const deleteTask = (id: number): void => {
        let clone: Task[] = JSON.parse(JSON.stringify(tasks));
        let index: number = id--;
        let spliced: Task[] = clone.splice(index, 1);
        let toStoreArray: any = spliced.map((val, index) => {
            val.id = index++;
            storeTask(val);
        });
        setTasks(toStoreArray);
        localStorage.removeItem(`task-${id}`);
    }

    const retrieveTask = (id: number): void => {
        let storageTask: string | null = localStorage.getItem(`task-${id}`);
        let task: Task;
        if(storageTask){
            task = convertStringToTask(storageTask);
            createTask(task);
        }
    }

    const retrieveTasks = (): void => {
        let id: number = tasks.length++;
        let storageTask: string | null = localStorage.getItem(`task-${id}`);
        while(storageTask) {
            retrieveTask(id);
            id++;
            storageTask = localStorage.getItem(`task-${id}`);
        }
    }

    useEffect(() => retrieveTasks(), []);

    return (
        <div>
            <FlatButton label={"ADICIONAR"}></FlatButton>
            <TasksList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask}></TasksList>
        </div>
    );
}