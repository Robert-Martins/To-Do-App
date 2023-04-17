import { Dispatch, SetStateAction } from "react";

type Props = {
    label: string,
    value: string,
    onChangeValue: Dispatch<SetStateAction<string>>,
    disabled: boolean
}

export const TextInput = (props: Props) => {

    const { label, value, onChangeValue, disabled } = props;

    const handleChange = (event: any) => {
        onChangeValue(event.target.value);
    }

    return (
        <div className="flex flex-column flex-align-left">
            <label>{label}</label>
            <input
                className="width-100"
                value={value}
                type="text"
                onChange={handleChange}
                disabled={disabled}
            ></input>
        </div>
    );
}