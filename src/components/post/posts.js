import React from "react";
import './post.css';
import {Link} from "react-router-dom";

function Posts({ posts }) {
    return (
        <>
            {posts.map((post) => {
                return (
                    <article key={post.data.subreddit_id}>
                        <h3>
                            <a href={`https://www.reddit.com/r/${post.data.subreddit}`}>{post.data.title}</a>
                        </h3>
                        <Link to={`/subreddit/${post.data.subreddit}`}>r/{post.data.subreddit}</Link>
                        <p>Comments: {post.data.num_comments} - Ups: {post.data.ups}</p>
                    </article>
                );
            })}
        </>
    );
}

export default Posts;