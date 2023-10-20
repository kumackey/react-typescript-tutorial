import React, {useState, FC} from "react";
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <LikeButton/>
            </header>
            <Gallery/>
        </div>
    );
}

function LikeButton() {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count + 1);
    };
    return (
        <span className="likeButton" onClick={handleClick}>
      ♥ {count}
    </span>
    );
}

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

export default App;
