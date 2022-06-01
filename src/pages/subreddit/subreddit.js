import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";

function Subreddit() {
    const {subredditId} = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        async function fetchPost() {
            try {
                const response = await axios.get(`https://www.reddit.com/r/${subredditId}/about.json`);
                console.log(response);
                setPost(response.data.data);
            } catch (e) {
                console.error(e);
            }
        }
        fetchPost();
    }, []);

    return (
        <>
            <Header />
            <main className="outer-container">
                {Object.keys(post).length > 0 &&
                    <div className="inner-container">
                        <h1>{post.display_name_prefixed}</h1>
                        <h3>Title</h3>
                        <p>{post.title}</p>
                        <h3>Description</h3>
                        <p>{post.public_description}</p>
                        <h3>Number of subscribers</h3>
                        <p>{post.subscribers}</p>
                        <Link to="/">Take me back</Link>
                    </div>}
            </main>
            <Footer/>
        </>
    );
}

export default Subreddit;