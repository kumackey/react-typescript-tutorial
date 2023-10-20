import React, {FC, useState} from "react";

export const LikeButton: FC = () => {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count + 1);
    };
    return (
        <span className="likeButton" onClick={handleClick}>
      ♥ {count}
    </span>
    );
};