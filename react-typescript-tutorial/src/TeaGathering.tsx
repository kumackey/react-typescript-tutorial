import React, {FC} from 'react';

type Props = {
    guest: number;
};
const Cup: FC<Props> = ({guest}) => {
    return <h2>Tea cup for guest #{guest}</h2>;
};
export default function TeaGathering(): React.JSX.Element {
    const cups: React.JSX.Element[] = [];
    for (let i = 1; i <= 12; i++) {
        cups.push(<Cup key={i} guest={i}/>);
    }
    return <div>{cups}</div>;
}