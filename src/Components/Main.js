import React from 'react';
import Header from './Header';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Songrow from './Songrow';
import './main.css';
import { useDataLayerValue } from '../DataLayer';

function Main({ spotify }) {
    const [{ mainplaylist }, dispatch] = useDataLayerValue();
    console.log(mainplaylist);
    return (
        <div className="main">
            <Header spotify={spotify} />
            <div className="main-info">
                <img src={mainplaylist?.images[0]?.url} alt="" />
                <div className="main-info-text">
                    <h3>{mainplaylist?.type}</h3>
                    <h2>{mainplaylist?.name}</h2>
                    <p>{mainplaylist?.description}</p>
                </div>
            </div>
            <div className="main-songs">
                <div className="main-icons">
                    <PlayCircleFilledIcon className="main-shuffle" />
                    <FavoriteIcon fontSize="large" />
                    <MoreHorizIcon />
                </div>
                {mainplaylist?.tracks.items.map((item) => (
                    <Songrow track={item.track} />
                ))}
            </div>
        </div>
    );
}

export default Main;
