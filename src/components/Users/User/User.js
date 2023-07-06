const User = ({user, setUserId}) => {
    const {id, name, username, email} = user;
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <button onClick={() => setUserId(id)}>getPosts</button>
        </div>
    );
};

export {User};
