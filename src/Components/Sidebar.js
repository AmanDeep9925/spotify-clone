import React from 'react';
import Sidebaroption from './Sidebaroption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import AddBoxIcon from '@material-ui/icons/AddBox';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useDataLayerValue } from '../DataLayer';
import './sidebar.css';

function Sidebar() {
    const [{ playlists }, dispatch] = useDataLayerValue();
    return (
        <div className="sidebar">
            <img
                className="sidebar-logo"
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                alt="spotify-logo"
                srcSet=""
            />
            <Sidebaroption title={'Home'} Icon={HomeIcon} />
            <Sidebaroption title={'Search'} Icon={SearchIcon} />
            <Sidebaroption title={'Library'} Icon={LibraryMusicIcon} />
            <h3 className="sidebar-title">Playlists</h3>
            <Sidebaroption title={'Create Playlist'} Icon={AddBoxIcon} />
            <Sidebaroption title={'Liked Songs'} Icon={FavoriteIcon} />
            <hr />

            {playlists?.items?.map((playlist) => (
                <Sidebaroption title={playlist.name} />
            ))}
        </div>
    );
}

export default Sidebar;
