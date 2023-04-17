import { Dispatch, SetStateAction } from "react";
import styles from './RadioButton.module.css';

type Props = {
    labels: string[],
    value: boolean,
    onChangeValue: Dispatch<SetStateAction<boolean>>
}

export const RadioButton = (props: Props) => {

    const { labels, value, onChangeValue } = props;

    const handleChange = (bool: boolean) => {
        onChangeValue(bool);
    }

    return (
        <div className={styles.radioButtonWrapper}>
            <button type="button" className={!value ? styles.selected : ''} onClick={() => handleChange(false)}>{labels[0]}</button>
            <button type="button" className={value ? styles.selected : ''} onClick={() => handleChange(true)}>{labels[1]}</button>
        </div>
    );
}