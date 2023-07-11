import {useEffect, useState} from "react";
import {Post} from "./Post/Post";

const Posts = ({user:{userId, name}}) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
            .then(value => value.json())
            .then(post => setPosts(post))
    }, [userId])

    return (
        <div>
            <h1>{name}</h1>
            {posts.map(post=><Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};
