const PostDetail = ({post}) => {
    const {id, userId, title, body} = post;
    return (
        <div>
            <hr/>
            <div>id: {id}</div>
            <div>userId: {userId}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
            <hr/>
        </div>
    );
};

export {PostDetail};
