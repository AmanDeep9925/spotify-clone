import React from 'react';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDowmIcon from '@material-ui/icons/VolumeDown';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import './footer.css';
import { Grid, Slider } from '@material-ui/core';

function Footer() {
    return (
        <div className="footer">
            <div className="footer-left">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTxPv1o4JDXQOUhbiNocTp2XGFtCHhhmy8Scw&usqp=CAU"
                    alt=""
                    className="footer-album-logo"
                />
                <div className="footer-song-info">
                    <h4>Yeah!</h4>
                    <p>Usher</p>
                </div>
                <FavoriteBorderIcon
                    className="footer-add-fav"
                    fontSize="small"
                />
            </div>
            <div className="footer-center">
                <ShuffleIcon className="footer-green" />
                <SkipPreviousIcon className="footer-icon" />
                <PlayCircleOutlineIcon
                    fontSize="large"
                    className="footer-icon"
                />
                <SkipNextIcon className="footer-icon" />
                <RepeatIcon className="footer-green" />
            </div>
            <div className="footer-right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDowmIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Footer;
