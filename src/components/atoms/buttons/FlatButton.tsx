import styles from './FlatButton.module.css';

type Props = {
    label: string,
    onClick?: () => void
}

export const FlatButton = (props: Props) => {

    const {label, onClick} = props;

    return <button type='button' className={styles.button} onClick={onClick}>{label}</button>;
}