import {Footer, FooterInfo} from './Footer';
import {LikeButton} from './LikeButton';
import {Gallery} from "./Gallery";
import './App.css';
import React from "react";
import {PackingList} from "./PackingList";

const footerInfo: FooterInfo = {
    copyrightOwner: 'Fumio Nonaka',
    styles: {
        backgroundColor: 'paleturquoise',
        fontFamily: 'Helvetica Neue',
        lineHeight: '2rem'
    }
};

function App(): React.JSX.Element {
    const getYear = () => new Date().getFullYear();
    return (
        <div className="App">
            <LikeButton/>
            <Gallery/>
            <PackingList/>
            <Footer footerInfo={footerInfo}>
                Copyright &#169;2000-{getYear()} {footerInfo.copyrightOwner}
            </Footer>
        </div>
    );
}

export default App;
