import { Dispatch, SetStateAction } from "react";

type Props = {
    date: string,
    setDate: Dispatch<SetStateAction<Date>>,
    label: string,
    disabled: boolean
}

export const DateSelect = (props: Props) => {

    const { date, setDate, label, disabled } = props;

    const handleChange = (event: any) => {
        setDate(event.target.value);
    }

    return (
        <div className="flex flex-column flex-align-left">
            <label>
                { label }
            </label>
            <input
                className="width-100"
                value={date}
                type="date"
                onChange={handleChange}
                disabled={disabled}
            ></input>
        </div>
    );
}