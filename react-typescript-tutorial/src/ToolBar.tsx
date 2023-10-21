import {FC, ReactNode} from 'react';

export default function Toolbar() {
    const handleClick = (message: string) => {
        alert(`Playing ${message}!`);
    };
    return (
        <div>
            <AlertButton message="Kiki's Delivery Service" onClick={handleClick}>
                Play
            </AlertButton>
        </div>
    );
}

type Props = {
    message: string;
    children: ReactNode;
    onClick: (message: string) => void;
};
const AlertButton: FC<Props> = ({message, children, onClick}) => {
    const foc = () => {
        onClick(message)
    };
    return <button onClick={foc}>
        {children} "{message}"
    </button>;
};

