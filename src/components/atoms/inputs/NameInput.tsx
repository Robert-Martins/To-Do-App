import { SyntheticEvent, useState } from 'react';
import styles from './NameInput.module.css';

export const NameInput = () => {

    const [username, setUsername] = useState('Your name');

    const handleChange = (event: any): void => {
        setUsername(event.target.value);
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