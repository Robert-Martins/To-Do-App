import { useState } from "react";
import { Task } from "../../../models/task.model";
import { FlatButton } from "../../atoms/buttons/FlatButton";
import { RadioButton } from "../../atoms/buttons/RadioButton";
import { TextArea } from "../../atoms/inputs/TextArea";
import { TextInput } from "../../atoms/inputs/TextInput";
import { DateSelect } from "../../atoms/selects/DateSelect";

type Props = {
    task: Task,
    isOpen: boolean,
    onClickSave: (task: Task) => void
}

export const TaskForm = (props: Props) => {

    const { task, isOpen, onClickSave } = props;

    const id = task.id;

    const [title, setTitle] = useState<string>(task.title != '' ? task.title : '');

    const [text, setText] = useState<string>(task.text != '' ? task.text : '');

    const [done, setDone] = useState<boolean>(task.done == false ? false : true);

    const [toBeDone, setToBeDone] = useState<Date>(task.toBeDone);

    const savedTask = () => {
        return new Task(
            id, 
            title, 
            text, 
            done, 
            toBeDone, 
            task.id == 0 ? new Date() : task.doneAt, 
            task.id == 0 ? new Date() : task.updatedAt, 
            task.id == 0 ? new Date() : task.createdAt
        );
    }

    return (
        <>
            {
                isOpen &&
                    <div className="modal">
                        <div>
                            <h3 className="">
                                {
                                    id != 0 ? `Task ${id}` : 'New Task'
                                }
                            </h3>
                            <span className="divider"></span>
                            <form className="flex flex-column gap-24">
                                <TextInput label="Title" value={title} onChangeValue={setTitle} disabled={done && id != 0}></TextInput>
                                <TextArea label="Task" value={text} onChangeValue={setText} disabled={done && id != 0}></TextArea>
                                <RadioButton labels={['To Be Done', 'Already Done']} value={done} onChangeValue={setDone}></RadioButton>
                                {
                                    (!done && id == 0) &&
                                        <DateSelect label="Date To Be Done" date={toBeDone.toString()} setDate={setToBeDone} disabled={done && id != 0}></DateSelect>
                                }
                                <FlatButton label={id != 0 ? `SAVE` : 'ADD'} onClick={()=> onClickSave(savedTask())}></FlatButton>
                            </form>
                        </div>
                    </div>
            }
        </>
    );
}