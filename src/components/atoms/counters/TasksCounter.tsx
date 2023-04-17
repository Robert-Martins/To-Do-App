type Props = {
    label: string,
    amount: number
}

export const TasksCounter = (props: Props) => {

    const {label, amount} = props;

    return (
        <div className="center-text p-8-16 counter border-4">
            <h6 className="m-bottom-8">
                {label}
            </h6>
            <p>
                {amount}
            </p>
        </div>
    );
}