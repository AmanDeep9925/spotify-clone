// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#
export const authEndpoint = 'https://accounts.spotify.com/authorize';
// Replace with your app's client ID, redirect URI and desired scopes
const CLIENT_ID = 'cff76213089a4e228206c8bf120d67cb';
const redirectURI = 'http://localhost:3000/';
const scopes = [
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-read-playback-state',
    'user-top-read',
    'user-modify-playback-state',
];

export const getTokenFromURL = () => {
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((initial, item) => {
            let parts = item.split('=');
            initial[parts[0]] = decodeURIComponent(parts[1]);

            return initial;
        }, {});
};

export const loginURL = `${authEndpoint}?client_id=${CLIENT_ID}&redirect_uri=${redirectURI}&scope=${scopes.join(
    '%20'
)}&response_type=token&show_dialog=true`;
