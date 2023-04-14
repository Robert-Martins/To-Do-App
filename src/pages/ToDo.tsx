import { useEffect, useState } from "react";
import { UserData } from "../components/molecules/forms/UserData";
import { Tasks } from "../components/organisms/tasks/Tasks";
import { User } from "../models/user.model";

export const ToDo = () => {

    const [user, setUser] = useState<User>({
        name: '',
        totalTasks: 0,
        tasksConcluded: 0,
        createdAt: new Date()
    });

    const [username, setUsername] = useState<string>('Your name');

    const [totalTasks, setTotalTasks] = useState<number>(0);

    const [tasksConcluded, setTasksConcluded] = useState<number>(0);

    const [createdAt, setCreatedAt] = useState<Date>(new Date());

    const setUserData = (): void => {
        setUser(new User(username, totalTasks, tasksConcluded, createdAt));
    }

    const retrieveUser = (): void => {
        if(localStorage.getItem('name') != null || localStorage.getItem('name') != ''){
            setUsername(`${localStorage.getItem('name')}`);
            setTotalTasks(Number(localStorage.getItem('totalTasks')));
            setTasksConcluded(Number(localStorage.getItem('tasksConcluded')));
            setCreatedAt(new Date(`${localStorage.getItem('createdAt')}`));
            setUserData();
        }
    }

    const saveUser = (): void => {
        setUserData();
        for(const [key, value] of Object.entries(user))
            localStorage.setItem(key, value);
    }

    useEffect(() => retrieveUser(), []);
    
    return (
        <div className="todo">
            <UserData username={username} setUsername={setUsername} totalTasks={totalTasks} tasksConcluded={tasksConcluded} createdAt={createdAt} saveUser={saveUser}></UserData>
            <Tasks totalTasks={totalTasks} setTotalTasks={setTotalTasks} tasksConcluded={tasksConcluded} setTasksConcluded={setTasksConcluded} saveUser={saveUser}></Tasks>
        </div>
    );
}