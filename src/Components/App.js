import React, { useEffect, useState } from 'react';
import Login from './Login';
import './App.css';
import { getTokenFromURL } from '../spotify-web-api/spotify';

function App() {
    const [token, setToken] = useState(null);

    useEffect(() => {
        const hash = getTokenFromURL();
        window.location.hash = '';
        const _token = hash.access_token;

        if (_token) {
            setToken(_token);
        }
        // console.log('👽', token);
    }, [token]);
    return <div className="app">{token ? <h1>Logged In</h1> : <Login />}</div>;
}

export default App;
