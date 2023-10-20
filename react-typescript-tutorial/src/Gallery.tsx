import React, {FC} from "react";

export const Gallery: FC = () => {
    return (
        <section>
            <h1>Amazing scientists</h1>
            <Profile/>
        </section>
    );
};

export const Profile: FC = () => {
    const photo = 'https://i.imgur.com/MK3eW3As.jpg';
    const description = 'Katherine Johnson';
    return <img src={photo} alt={description}/>;
};
