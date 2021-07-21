import React from 'react';
import './Navbar.sass';

const Navbar = () => {
    return (
        <div className={"navbar"}>
            <div className={"logo"}>BLOG</div>
            <div className={"flex-spacer"}/>
            <div className={"nav-item-wrapper"}>
                <div className={"nav-item"}>HOME</div>
                <div className={"nav-item"}>ABOUT</div>
            </div>
        </div>
    );
};

export default Navbar;