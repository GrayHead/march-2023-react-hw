import {useFetch} from "../hooks/useFetch";

const TestUseFetch = () => {
    const users = useFetch('/users');
    const posts = useFetch('/posts');
    const comments = useFetch('/comments');
    return (
        <div>
            {users.map(user => (
                <div key={user.id}>
                    <div>id: {user.id}</div>
                    <div>name: {user.name}</div>
                </div>
            ))}
            <hr/>
            {posts.map(post => (
                <div key={post.id}>
                    <div>id: {post.id}</div>
                    <div>title: {post.title}</div>
                </div>
            ))}
            <hr/>
            {comments.map(comment => (
                <div key={comment.id}>
                    <div>id: {comment.id}</div>
                    <div>name: {comment.email}</div>
                </div>
            ))}
        </div>
    );
};

export {TestUseFetch};
