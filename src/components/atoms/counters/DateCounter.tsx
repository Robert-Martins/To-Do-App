type Props = {
    date: Date
}

export const DateCounter = (props: Props) => {

    const {date} = props;

    return (
        <div className="center-text">
            <h6>
                User since
            </h6>
            <p>
                {`${date.toDateString()}`}
            </p>
        </div>
    )
}