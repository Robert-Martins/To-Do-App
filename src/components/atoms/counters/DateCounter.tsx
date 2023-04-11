type Props = {
    date: Date
}

export const DateCounter = (props: Props) => {

    const {date} = props;

    return (
        <div>
            <h6>
                User since
            </h6>
            <p>
                {`${date}`}
            </p>
        </div>
    )
}