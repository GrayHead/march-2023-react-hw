// import {Users} from "./components/Users/Users";
// import {useEffect, useState} from "react";
//
// const App = () => {
//     const [users, setUsers] = useState([]);
//
//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/users').then(value => value.json()).then(users => setUsers(users));
//     }, [])
//
//     return (
//         <div>
//             <Users users={users}/>
//         </div>
//     );
// };
//
// export {App};
import {UserContainer} from "./components/UserContainer/UserContainer";
import {Posts} from "./components/Posts/Posts";
import {createContext, useState} from "react";
import {Child1} from "./components/Child1/Child1";
import {Child2} from "./components/Child2/Child2";

// const App = () => {
//     const [user, setUser] = useState(null);
//     const [userActive, setUserActive] = useState(null);
//     return (
//         <div>
//             <UserContainer setUser={setUser} setUserActive={setUserActive} userActive={userActive}/>
//             <hr/>
//             {user&&userActive && <Posts user={user}/>}
//         </div>
//     );
// };
//
// export {App};
const Context = createContext(null);
const App = () => {
    const [data, setData] = useState([1,2,3]);
    return (
        <Context.Provider value={{setData,data}}>
            <div>
                <Child1/>
                <hr/>
                <Child2/>
            </div>
        </Context.Provider>

    );
};

export {App, Context};
