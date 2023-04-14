type Props = {
    label: string,
    amount: number
}

export const TasksCounter = (props: Props) => {

    const {label, amount} = props;

    return (
        <div className="center-text">
            <h6>
                {label}
            </h6>
            <p>
                {amount}
            </p>
        </div>
    );
}