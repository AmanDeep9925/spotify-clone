import React from 'react';
import './header.css';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import { useDataLayerValue } from '../DataLayer';

function Header() {
    const [{ user }, dispatch] = useDataLayerValue();
    console.log(user);

    return (
        <div class="header">
            <div className="header-left">
                <SearchIcon />
                <input
                    type="text"
                    placeholder="Search for Artists, Song ad much more..."
                />
            </div>
            <div className="header-right">
                <Avatar
                    src={user?.images[0]?.url}
                    alt={user?.display_name}
                    fontSize="large"
                />
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    );
}

export default Header;
