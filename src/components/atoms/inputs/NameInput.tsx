import { Dispatch, SetStateAction, SyntheticEvent, useState } from 'react';
import styles from './NameInput.module.css';

type Props = {
    username: string,
    setUsername: Dispatch<SetStateAction<string>>,
    saveUser: () => void
}

export const NameInput = (props: Props) => {

    const {username, setUsername, saveUser} = props;

    const handleChange = (event: any): void => {
        setUsername(event.target.value);
        saveUser();
    }

    return (
        <input
            className={styles.nameInput}
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
            maxLength={20}
            required
        ></input>
    );
}