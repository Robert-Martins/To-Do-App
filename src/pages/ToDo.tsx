import { NameInput } from "../components/atoms/inputs/NameInput";
import { Tasks } from "../components/organisms/tasks/Tasks";

export const ToDo = () => {
    return (
        <>
            <NameInput></NameInput>
            <Tasks></Tasks>
        </>
    );
}