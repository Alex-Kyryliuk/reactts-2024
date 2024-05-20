import React from 'react';
import {NavLink} from "react-router-dom";
import css from './Header.module.css'

const HeaderComponent = () => {
    return (
        <div className={css.Header}>
            <NavLink to='/'>home</NavLink>

            <NavLink to='users'>users</NavLink>

            <NavLink to='posts'>posts</NavLink>

            <NavLink to='comments'>comments</NavLink>
        </div>
    );
};

export default HeaderComponent;