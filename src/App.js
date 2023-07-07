import {useState} from "react";

import {Launches} from "./components/Launches/Launches";
import {Users} from "./components/Users/Users";
import UserPosts, {qwe, asd} from "./components/Users/Posts/Posts";
import {Test} from "./components/Test/Test";

const App = () => {
    const [userId, setUserId] = useState(null);
    return (
        <div>
            {/*<Posts/>*/}
            {/*<Launches/>*/}
            {/*<Users setUserId={setUserId}/>*/}
            {/*{userId && <UserPosts userId={userId}/>}*/}
            <Test/>
        </div>
    );
};

export {App};
