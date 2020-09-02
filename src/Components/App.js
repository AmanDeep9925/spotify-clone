import React, { useEffect } from 'react';
import Login from './Login';
import Player from './Player';
import './App.css';
import { getTokenFromURL } from '../spotify-web-api/spotify';
import { useDataLayerValue } from '../DataLayer';

import SpotifyWebApi from 'spotify-web-api-js';

const spotify = new SpotifyWebApi();

function App() {
    const [{ user, token }, dispatch] = useDataLayerValue();

    useEffect(() => {
        const hash = getTokenFromURL();
        window.location.hash = '';
        const _token = hash.access_token;

        if (_token) {
            dispatch({
                type: 'SET_TOKEN',
                token: _token,
            });

            // To communicate with app and spotify
            spotify.setAccessToken(_token);

            // staging the info to datalayer
            spotify.getMe().then((user) => {
                // console.log('🧑', user);
                dispatch({
                    type: 'SET_USER',
                    user: user,
                });
            });

            // getting the user playlist

            spotify.getUserPlaylists().then((playlists) => {
                {
                    dispatch({
                        type: 'SET_PLAYLISTS',
                        playlists : playlists
                    });
                }
            });
        }
    }, [token, dispatch]);

    return (
        <div className="app">
            {token ? <Player spotify={spotify} /> : <Login />}
        </div>
    );
}

export default App;
