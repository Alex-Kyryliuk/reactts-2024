import React, {FC} from 'react';
import {UserModel} from "../../models/UserModel";

interface IProps{
    user:UserModel;
}

type IPropsType = IProps & {lift?:(userId:number)=>void}

const UserComponent:FC<IPropsType> = ({user, lift}) => {

    const handler =()=>{
        if(lift){
            lift(user.id);
        }
    }
    return (
        <div>
            <img src={user.image}/>
            <h2>{user.id}. {user.lastName} {user.firstName} {user.maidenName}</h2>
            <ul>
                <li>age: {user.age}</li>
                <li>gender: {user.gender}</li>
                <li>email: {user.email}</li>
                <li>hone: {user.phone}</li>
                <li>username: {user.username}</li>
                <li>password:{user.password}</li>
                <li>birthDate:{user.birthDate}</li>
            </ul>
            <button onClick={handler}>Show Posts</button>
            <hr/>
            <hr/>
        </div>
    );
};

export default UserComponent;