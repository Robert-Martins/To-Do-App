import { Task } from "../../../models/task.model";

type Props = {
    tasks: Task[],
    updateTask: (task: Task) => void,
    deleteTask: (id: number) => void
}

export const TasksList = (props: Props) => {
    return (
        <></>
    );
}