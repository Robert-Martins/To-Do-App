import { useState } from "react";
import { User } from "../../../models/user.model";
import { DateCounter } from "../../atoms/counters/DateCounter";
import { TasksCounter } from "../../atoms/counters/TasksCounter";
import { NameInput } from "../../atoms/inputs/NameInput";

export const UserData = () => {

    return (
        <div className="flex f-center f-space-between">
            <div className="flex f-center">
                <NameInput></NameInput>
                <h4>'s Tasks</h4>
            </div>
            <div className="flex">
                <TasksCounter></TasksCounter>
                <TasksCounter></TasksCounter>
                <DateCounter></DateCounter>
            </div>
        </div>
    );
}