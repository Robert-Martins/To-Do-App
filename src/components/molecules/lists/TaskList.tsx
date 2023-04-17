import { useState } from "react";
import { Task } from "../../../models/task.model";
import { SortBy, SortOrder } from "../../../types/UtilTypes";
import { TaskListOption } from "../../atoms/options/TaskListOption";

type Props = {
    label: string,
    color: string,
    tasks: Task[]
}

export const TaskList = (props: Props) => {

    const { label, color, tasks } = props;

    const [sortBy, setSortBy] = useState<SortBy>('id');

    const [sortOrder, setSortOrder] = useState<SortOrder>('ASC');

    const taskList = tasks.map(task => <TaskListOption task={task} color={color}></TaskListOption>);
    
    return (
        <div>
            <div>
                <h5>
                    {label}
                </h5>
            </div>
            {
                tasks.length != 0 ?
                    <>
                        {taskList}
                    </>
                :
                    <>
                        <h6>
                            No tasks in this category
                        </h6>
                    </>
            }
        </div>
    );
}