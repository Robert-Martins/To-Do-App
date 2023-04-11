import { Dispatch, SetStateAction, useState } from "react";
import { User } from "../../../models/user.model";
import { DateCounter } from "../../atoms/counters/DateCounter";
import { TasksCounter } from "../../atoms/counters/TasksCounter";
import { NameInput } from "../../atoms/inputs/NameInput";

type Props = {
    username: string,
    setUsername: Dispatch<SetStateAction<string>>,
    totalTasks: number,
    tasksConcluded: number,
    createdAt: Date,
    saveUser: () => void
}

export const UserData = (props: Props) => {

    const {username, setUsername, totalTasks, tasksConcluded, createdAt, saveUser} = props;

    return (
        <div className="flex f-center f-space-between">
            <div className="flex f-center">
                <NameInput username={username} setUsername={setUsername} saveUser={saveUser}></NameInput>
                <h4>'s Tasks</h4>
            </div>
            <div className="flex">
                <TasksCounter label={"Total Tasks"} amount={totalTasks}></TasksCounter>
                <TasksCounter label={"Concluded Tasks"} amount={tasksConcluded}></TasksCounter>
                <DateCounter date={createdAt}></DateCounter>
            </div>
        </div>
    );
}