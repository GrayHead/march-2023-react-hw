import {useState} from "react";
import {UserForm} from "./UserForm/UserForm";
import {Users} from "./Users/Users";

const UserContainer = () => {
    const [users, setUsers] = useState([]);
    return (
        <div>
            <UserForm setUsers={setUsers}/>
            <hr/>
            <Users users={users} setUsers={setUsers}/>
        </div>
    );
};

export {UserContainer};
