type Props = {
    icon: string,
    onClick: () => void
}

export const IconButton = (props: Props) => {

    const {icon, onClick} = props;

    return (
        <button onClick={onClick}>
            
        </button>
    );
}