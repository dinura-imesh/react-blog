import React from 'react';
import './BlogCard.sass';
import {Link} from 'react-router-dom';

const BlogCard = ({blogData}) => {
    return (
        <Link to={`/blog-post/${blogData.id}`}>
            <div className={"blog-card"}>
                <div className={"blog-card-title"}>
                    {`${blogData.title[0].toUpperCase()}${blogData.title.slice(1)}`}
                </div>
                <div className={"blog-card-preview"}>
                    {blogData.body}
                </div>
                <div className={"read-more"}>
                    Read more >>
                </div>
            </div>
        </Link>
    );
};

export default BlogCard;