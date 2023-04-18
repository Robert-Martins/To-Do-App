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
        const storedUser: string | null = localStorage.getItem('user');
        if(storedUser != null){
            const user: User = JSON.parse(storedUser);
            setUsername(user.name);
            setTotalTasks(user.totalTasks);
            setTasksConcluded(user.tasksConcluded);
            setCreatedAt(new Date(user.createdAt));
            setUserData();
        }
    }

    const saveUser = (): void => {
        setUserData();
        localStorage.setItem('user', JSON.stringify(user));
    }

    useEffect(() => retrieveUser(), []);
    
    return (
        <div className="todo">
            <div className="height-14">
                <UserData 
                    username={username} 
                    setUsername={setUsername} 
                    totalTasks={totalTasks} 
                    tasksConcluded={tasksConcluded} 
                    createdAt={createdAt} 
                    saveUser={saveUser}
                ></UserData>
            </div>
            <div className="height-86 overflow-hidden">
                <Tasks 
                    totalTasks={totalTasks} 
                    setTotalTasks={setTotalTasks} 
                    tasksConcluded={tasksConcluded} 
                    setTasksConcluded={setTasksConcluded} 
                    saveUser={saveUser}
                ></Tasks>
            </div>
        </div>
    );
}