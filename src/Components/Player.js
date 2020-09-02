import React from 'react';
import Sidebar from './Sidebar';
import Main from './Main';
import Footer from './Footer';
import './player.css';

function Player({ spotify }) {
    return (
        <div className="player">
            <div className="player-body">
                <Sidebar />
                <Main />
            </div>
            <Footer />
        </div>
    );
}

export default Player;
