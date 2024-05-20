import React, {FC} from 'react';
import {IUserModel} from "../../model/IUserModel";
import {NavLink} from "react-router-dom";
import css from './User.module.css'
interface IProps {
    user: IUserModel;
}

const UserComponent:FC<IProps> = ({user}) => {
    return (
        <div className={css.User}>
            <div>
                Id: {user.id},
                name: {user.name},
                username: {user.username},
                email: {user.email}
            </div>

            <NavLink to={user.id.toString()} state={{user: 'user'}}>
                <button>Show posts of this user</button>
            </NavLink>
        </div>
    );
};

export default UserComponent;