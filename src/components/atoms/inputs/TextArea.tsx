import { Dispatch, SetStateAction } from "react";

type Props = {
    label: string,
    value: string,
    onChangeValue: Dispatch<SetStateAction<string>>
    disabled: boolean
}

export const TextArea = (props: Props) => {

    const { label, value, onChangeValue, disabled } = props;

    const handleChange = (event: any) => {
        onChangeValue(event.target.value);
    }

    return (
        <div className="flex flex-100 flex-column flex-align-left">
            <label>{label}</label>
            <textarea
                className="width-100"
                value={value}
                onChange={handleChange}
                disabled={disabled}
            ></textarea>
        </div>
    );
}