import {Footer, FooterInfo} from './Footer';
import {LikeButton} from './LikeButton';
import './App.css';
import React from "react";
import {PackingList} from "./PackingList";
import List from './List'
import TeaGathering from "./TeaGathering";
import Toolbar from "./ToolBar";
import CallButtons from "./CallButtons";
import Gallery from "./Gallery";

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
            <List/>
            <Gallery/>
            <Toolbar/>
            <CallButtons/>
            <PackingList/>
            <LikeButton/>
            <TeaGathering/>
            <Footer footerInfo={footerInfo}>
                Copyright &#169;2000-{getYear()} {footerInfo.copyrightOwner}
            </Footer>
        </div>
    );
}

export default App;
