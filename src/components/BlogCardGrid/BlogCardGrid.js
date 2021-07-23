import React from 'react';
import BlogCard from "../BlogCard/BlogCard";
import {useSelector} from "react-redux";
import './BlogCardGrid.sass';

const BlogCardGrid = () => {
    const posts = useSelector((state) => state.posts.posts);

    return (
        <div className={"blog-card-grid"}>
            {posts.map(e=> <BlogCard blogData={e} key={e.id}/>)}
        </div>
    );
};

export default BlogCardGrid;