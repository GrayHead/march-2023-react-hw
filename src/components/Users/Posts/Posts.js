import {useEffect, useState} from "react";

import {Post} from "./Post/Post";

const UserPosts = ({userId}) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`).then(value => value.json()).then(value => setPosts(value))
    }, [userId])
    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {UserPosts};
