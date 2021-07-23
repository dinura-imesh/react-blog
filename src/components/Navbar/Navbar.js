import React from 'react';
import './Navbar.sass';
import {Link} from 'react-router-dom';
const Navbar = () => {
    return (
        <div className={"navbar"}>
            <Link to={"/"}>

            <div className={"logo"}>BLOG</div>
            </Link>
            <div className={"flex-spacer"}/>
            <div className={"nav-item-wrapper"}>
                <div className={"nav-item"}>HOME</div>
                <div className={"nav-item"}>ABOUT</div>
            </div>
        </div>
    );
};

export default Navbar;