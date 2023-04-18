import { useEffect, useState } from "react";
import { UserData } from "../components/molecules/forms/UserData";
import { Tasks } from "../components/organisms/tasks/Tasks";
import { User } from "../models/user.model";

export const ToDo = () => {

    useEffect(() => retrieveUser(), []);

    const [username, setUsername] = useState<string>('Your name');

    const [totalTasks, setTotalTasks] = useState<number>(0);

    const [tasksConcluded, setTasksConcluded] = useState<number>(0);

    const [createdAt, setCreatedAt] = useState<Date>(new Date());

    const userData = (): User => {
        return new User(username, totalTasks, tasksConcluded, createdAt);
    }

    const [user, setUser] = useState<User>(userData());

    const retrieveUser = (): void => {
        const storedUser: string | null = localStorage.getItem('user');
        storedUser != null ? initUser(JSON.parse(storedUser)) : setUser(userData());
    }

    const initUser = (user: User) => {
        setUsername(user.name);
        setTotalTasks(user.totalTasks);
        setTasksConcluded(user.tasksConcluded);
        setCreatedAt(new Date(user.createdAt));
        setUser(userData());
    }

    const saveUser = (): void => {
        setUser(userData());
        localStorage.setItem('user', JSON.stringify(user));
    }
    
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