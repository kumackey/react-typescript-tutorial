import {FC} from 'react';

export function PackingList() {
    return (
        <section>
            <h1>Sally Ride's Packing List</h1>
            <ul>
                <Item isPacked={true} name="Space suit"/>
                <Item isPacked={true} name="Helmet with a golden leaf"/>
                <Item isPacked={false} name="Photo of Tam"/>
            </ul>
        </section>
    );
}

type ItemDescriptions = { isPacked: boolean; name: string };
export const Item: FC<ItemDescriptions> = ({ isPacked, name }) => {
    return <li className="item">{name} {isPacked && '✔'}</li>;
};