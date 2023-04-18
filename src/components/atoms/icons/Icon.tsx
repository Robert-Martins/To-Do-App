import { IoExitOutline } from "react-icons/io5";

export type Icons = 'exit';

type Props = {
    icon: Icons;
}

export const Icon = (props: Props) => {

    const { icon } = props;

    const icons = {
        exit: IoExitOutline
    }

    const AppIcon = icons[icon];

    return <AppIcon/>;
}