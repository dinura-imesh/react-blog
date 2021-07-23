import React, {useEffect} from 'react';
import './Home.sass';
import {useDispatch} from 'react-redux'
import {fetchUserById} from "../../redux/slicers/PostsSlice";
import BlogCardGrid from "../../components/BlogCardGrid/BlogCardGrid";

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        console.log("Effect")
        dispatch(fetchUserById());

    })
    return (
        <div className="home">
            <BlogCardGrid/>
        </div>
    );
};


export default Home;