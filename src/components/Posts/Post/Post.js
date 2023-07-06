import {useState} from "react";

import {PostDetail} from "../PostDetail/PostDetail";

const Post = ({post}) => {
    const [isShow, setIsShow] = useState(false);
    const {id, title} = post;
    return (
        <div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            {/*<button onClick={()=>setIsShow(!isShow)}>{isShow?'Hide':'Show'}</button>*/}
            <button onClick={() => setIsShow(prev => !prev)}>{isShow ? 'Hide' : 'Show'}</button>
            {
                isShow && <PostDetail post={post}/>
            }
        </div>
    );
};

export {Post};
