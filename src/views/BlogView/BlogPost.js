import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import './BlogPost.sass';
import {useSelector} from "react-redux";
import ApiService from "../../services/apiservice";

const BlogPost = () => {
    const [post, setPost] = useState(null);
    console.log("re render");
    let {id} = useParams();
    const posts = useSelector((state) => state.posts.posts);
    if (post == null) {
        const p = posts.find(e => e.id == id);
        if (p == null)
            ApiService.loadPostById(id).then(data => {
                setPost(data);
            })
        else
            setPost(p);
    }
    return (
            post != null ? <div className={"blog-post"}>
            <div className={"header"}>{`${post.title[0].toUpperCase()}${post.title.slice(1)}`}</div>
            <div className={"body"}>{post.body}</div>
        </div> : <div>Not found</div>
    );
};

export default BlogPost;