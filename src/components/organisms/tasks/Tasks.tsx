import { FlatButton } from "../../atoms/buttons/FlatButton";
import { TasksList } from "../../molecules/lists/TasksList";

export const Tasks = () => {
    return (
        <div>
            <FlatButton></FlatButton>
            <TasksList></TasksList>
        </div>
    );
}