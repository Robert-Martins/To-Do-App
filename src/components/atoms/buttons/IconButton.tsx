import { Icon, Icons } from "../icons/Icon";

type Props = {
    icon: Icons,
    onClick: () => void
}

export const IconButton = (props: Props) => {

    const {icon, onClick} = props;

    return (
        <button className="size-32" onClick={onClick}>
            <Icon icon={icon}></Icon>
        </button>
    );
}