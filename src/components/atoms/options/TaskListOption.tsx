import { Task } from "../../../models/task.model";

type Props = {
    task: Task,
    color: string
}

export const TaskListOption = (props: Props) => {

    const { task, color } = props;

    return (
        <div>
            <div>
                <h5>
                    {task.id}
                </h5>
                <h5>
                    {task.title}
                </h5>
            </div>
            <div>
                <p>{task.done ? 'Done' : 'To Be Done'}</p>
                <p>{task.done ? task.doneAt.toString() : task.toBeDone.toString() }</p>
            </div>
        </div>
    );
}