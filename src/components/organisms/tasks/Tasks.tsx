import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Task } from "../../../models/task.model";
import { FlatButton } from "../../atoms/buttons/FlatButton";
import { TaskForm } from "../../molecules/forms/TaskForm";
import { TasksLists } from "../../molecules/lists/TasksLists";

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

    const createNewTask = (): Task => {
        return new Task(0, '', '', false, new Date(), new Date(), new Date(), new Date());
    }

    const storeTask = (task: Task): void => {
        localStorage.setItem(`task-${task.id}`, JSON.stringify(task));
    }

    const createTask = (task: Task): void => {
        let clone: Task[] = JSON.parse(JSON.stringify(tasks));
        task.id = clone.length + 1;
        clone.push(task);
        clone.sort((a, b) => a.id - b.id);
        setTasks(clone);
        setAddTask(false);
        setTotalTasks(clone.length);
        storeTask(task);
    }

    const updateTask = (task: Task): void => {
        let clone: Task[] = JSON.parse(JSON.stringify(tasks));
        let index: number = task.id - 1;
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
        if(storageTask)
            createTask(JSON.parse(storageTask));
    }

    const taskStatusChanged = (task: Task) => {
        const storedTask: Task = tasks.filter(filter => filter.id == task.id)[0];
        if(storedTask.done !== task.done)
            task.done === true ? setTasksConcluded(tasksConcluded + 1) : setTotalTasks(totalTasks + 1);
    }

    const retrieveTasks = (): void => {
        let id: number = 1;
        let storageTask: string | null = localStorage.getItem(`task-${id}`);
        while(storageTask) {
            retrieveTask(id);
            id++;
            storageTask = localStorage.getItem(`task-${id}`);
        }
    }

    useEffect(() => {
        retrieveTasks();
    }, []);

    return (
        <div className="flex flex-column f-center gap-36 p-top-20">
            <FlatButton label={"ADICIONAR"} onClick={() => setAddTask(true)}></FlatButton>
            <TaskForm task={createNewTask()} isOpen={addTask} onClickSave={createTask}></TaskForm>
            <TasksLists tasks={tasks} updateTask={updateTask} deleteTask={deleteTask}></TasksLists>
        </div>
    );
}