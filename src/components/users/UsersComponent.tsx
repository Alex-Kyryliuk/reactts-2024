import React, {FC, useEffect, useState} from 'react';
import {UserModel} from "../../models/UserModel";
import {getAllUsers} from "../../services/dummy.api.service";
import UserComponent from "../user/UserComponent";

type IPropsType = {lift?:(userId:number)=> void}

const UsersComponent: FC<IPropsType> = ({lift}) => {
    const [users, setUsers] = useState<UserModel[]>([]);
    useEffect(() => {
        getAllUsers().then(({data: {users}}) => {
            setUsers(users)
        });
    }, [])


    return (
        <div>
            {users.map((user: UserModel) => (<UserComponent key={user.id} user={user} lift={lift}/>))}

        </div>
    );
};

export default UsersComponent;