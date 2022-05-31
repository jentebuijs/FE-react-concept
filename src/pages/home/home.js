import './home.css';
import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await axios.get('https://www.reddit.com/hot.json?limit=15');
                console.log(response.data.data.children);
                setPosts(response.data.data.children);
            } catch (e) {
                console.error(e);
            }
        }

        fetchPosts();
    }, []);

    return (
        <>
            <header>

            </header>
            <main>
                {posts.length > 0 && posts.map((post) => {
                    return (
                        <article key={post.data.subreddit}>
                            <h3><a href={`https://www.reddit.com/r/${post.data.subreddit}`}>{post.data.title}</a></h3>
                            <Link to={`/subreddit/${post.data.subreddit}`}>r/{post.data.subreddit}</Link>
                            <p>Comments: {post.data.num_comments} - Ups: {post.data.ups}</p>
                        </article>
                    );
                })}
            </main>
            <footer>
                <p>In opdracht van NOVI Hogeschool ©️ 2022</p>
            </footer>
        </>
    );
}

export default Home;