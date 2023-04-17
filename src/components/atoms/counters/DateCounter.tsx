type Props = {
    date: Date
}

export const DateCounter = (props: Props) => {

    const {date} = props;

    return (
        <div className="center-text p-8-16 counter border-4">
            <h6 className="m-bottom-8">
                User since
            </h6>
            <p>
                {`${date.toDateString()}`}
            </p>
        </div>
    )
}