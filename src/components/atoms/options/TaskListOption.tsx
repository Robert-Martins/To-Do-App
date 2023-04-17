import { useState } from "react";
import { Task } from "../../../models/task.model";
import { TaskForm } from "../../molecules/forms/TaskForm";

type Props = {
    task: Task,
    color: string
    updateTask: (task: Task) => void
}

export const TaskListOption = (props: Props) => {

    const { task, color, updateTask } = props;

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const onUpdateTask = (task: Task) => {
        setIsOpen(false);
        updateTask(task);
    }

    return (
        <>
            <div onClick={() => setIsOpen(true)} className="width-100 shadow p-8">
                <div className="flex gap-12 m-bottom-24">
                    <h5>
                        {task.id}
                    </h5>
                    <h5>
                        {task.title}
                    </h5>
                </div>
                <div className="flex gap-12">
                    <p>{task.done ? 'Done' : 'To Be Done'}</p>
                    <p>{task.done ? `${task.doneAt}` : `${task.toBeDone}` }</p>
                </div>
            </div>
            <TaskForm task={task} isOpen={isOpen} onClickSave={onUpdateTask}></TaskForm>
        </>
    );
}