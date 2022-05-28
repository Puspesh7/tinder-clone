import React from 'react'
import "./Header.css"
import PersonIcon from '@mui/icons-material/Person';
import { IconButton } from '@mui/material';
import tinder_logo from "./Tinder_logo_PNG18.png"
import ForumIcon from '@mui/icons-material/Forum';

function Header() {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon fontSize="large" className="header-icon"/>
            </IconButton>
            <img className="header-logo" src={tinder_logo} alt=""/>
            <IconButton>
                <ForumIcon fontSize="large" className="header-icon"/>
            </IconButton>
        </div>
    )
}

export default Header
