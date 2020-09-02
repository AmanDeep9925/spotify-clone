import React from 'react';
import './songrow.css';

function Songrow({ track }) {
    return (
        <div className="song-row">
            <img
                src={track.album.images[0].url}
                alt=""
                srcSet=""
                className="songrow-album"
            />
            <div className="songrow-info">
                <h1>{track.name}</h1>
                <p>
                    {track.artists.map((artist) => artist.name).join(', ')} -{' '}
                    {track.album.name}
                </p>
            </div>
        </div>
    );
}

export default Songrow;
