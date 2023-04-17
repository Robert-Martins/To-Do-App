import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Task } from "../../../models/task.model";
import { FlatButton } from "../../atoms/buttons/FlatButton";
import { TaskForm } from "../../molecules/forms/TaskForm";
import { TasksList } from "../../molecules/lists/TasksList";

type Props = {
    totalTasks: number,
    setTotalTasks: Dispatch<SetStateAction<number>>,
    tasksConcluded: number,
    setTasksConcluded: Dispatch<SetStateAction<number>>,
    saveUser: () => void
}

export const Tasks = (props: Props) => {

    const {totalTasks, setTotalTasks, tasksConcluded, setTasksConcluded, saveUser} = props;

    const [tasks, setTasks] = useState<Task[]>([]);

    const [addTask, setAddTask] = useState<boolean>(false);

    const onAddTask = () => {
        setAddTask(true);
    }

    const convertStringToTask = (string: string): Task => {
        const taskValues: Array<string> = string.split('§');
        return new Task(Number(taskValues[0]), taskValues[1], taskValues[2], Boolean(taskValues[3]), new Date(taskValues[4]), new Date(taskValues[5]), new Date(taskValues[6]));
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
        setAddTask(false);
        setTotalTasks(clone.length);
        storeTask(task);
    }

    const updateTask = (task: Task): void => {
        let clone: Task[] = JSON.parse(JSON.stringify(tasks));
        let index: number = task.id--;
        taskStatusChanged(task);
        clone[index] = task;
        setTasks(clone);
        setAddTask(false);
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

    const taskStatusChanged = (task: Task) => {
        const index: number = task.id--;
        const storedTask: Task = tasks[index];
        if(storedTask.done != task.done)
            task.done == true ? setTasksConcluded(tasksConcluded + 1) : setTotalTasks(totalTasks + 1);
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
        <div className="flex f-center gap-36 p-top-20">
            <FlatButton label={"ADICIONAR"} onClick={onAddTask}></FlatButton>
            <TaskForm task={new Task(0, '', '', false, new Date(), new Date(), new Date())} isOpen={addTask} onClickSave={createTask}></TaskForm>
            <TasksList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask}></TasksList>
        </div>
    );
}