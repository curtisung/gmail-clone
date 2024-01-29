import React from 'react';
import "./Header.css";
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon/>
            </div>
            <div className="header__middle"></div>
            <div classname="header__right"></div>
        </div>
    );
}

export default Header;