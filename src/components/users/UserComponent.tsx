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
                Id: {user.id};
                name: {user.name};
                username: {user.username};
                email: {user.email};
                address: street - {user.address.street}, suite - {user.address.suite}, city - {user.address.city}, zipcode - {user.address.zipcode}, geo: lat - {user.address.geo.lat}, lng - {user.address.geo.lng};
                phone: {user.phone};
                website: {user.website};
                company: name - {user.company.name}, catchPhrase: {user.company.catchPhrase}, bs: {user.company.bs}
            </div>

            <NavLink to={user.id.toString()} state={{user: 'user'}}>
                <button>Show posts of this user</button>
            </NavLink>
        </div>
    );
};

export default UserComponent;