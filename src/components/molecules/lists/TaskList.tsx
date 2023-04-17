import { useState } from "react";
import { Task } from "../../../models/task.model";
import { SortBy, SortOrder } from "../../../types/UtilTypes";
import { TaskListOption } from "../../atoms/options/TaskListOption";

type Props = {
    label: string,
    color: string,
    tasks: Task[],
    updateTask: (task: Task) => void,
    deleteTask: (id: number) => void
}

export const TaskList = (props: Props) => {

    const { label, color, tasks, updateTask, deleteTask } = props;

    const [sortBy, setSortBy] = useState<SortBy>('id');

    const [sortOrder, setSortOrder] = useState<SortOrder>('ASC');

    const taskList = tasks.map(task => <TaskListOption key={task.id} task={task} color={color} updateTask={updateTask}></TaskListOption>);
    
    return (
        <div>
            <div className={`${color} p-12-24 border-top-4`}>
                <h5 className="white">
                    {label}
                </h5>
            </div>
            <div className="flex flex-column f-center gap-8 white border-bottom-4 min-width-82 p-8">{
                tasks.length !== 0 ?
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
        </div>
    );
}