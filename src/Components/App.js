import React, { useEffect, useState } from 'react';
import Login from './Login';
import Player from './Player';
import './App.css';
import { getTokenFromURL } from '../spotify-web-api/spotify';

import SpotifyWebApi from 'spotify-web-api-js';

const spotify = new SpotifyWebApi();

function App() {
    const [token, setToken] = useState(null);

    useEffect(() => {
        const hash = getTokenFromURL();
        window.location.hash = '';
        const _token = hash.access_token;

        if (_token) {
            setToken(_token);
            // To communicate with app and spotify
            spotify.setAccessToken(_token);

            spotify.getMe().then((user) => {
                console.log('🧑', user);
            });
        }
        // console.log('👽', token);
    }, [token]);
    return <div className="app">{token ? <Player /> : <Login />}</div>;
}

export default App;
