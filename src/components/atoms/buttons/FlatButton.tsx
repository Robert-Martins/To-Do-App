type Props = {
    label: string,
    onClick?: () => void
}

export const FlatButton = (props: Props) => {

    const {label, onClick} = props;

    return (
        <button onClick={onClick}>{label}</button>
    );
}