import React from "react";
import './articles.css';
import {Link} from "react-router-dom";

function Articles({ posts }) {
    return (
        <div className="article-container">
            {posts.length > 0 && posts.map((post) => {
                return (
                    <article key={post.data.subreddit_id}>
                        <h3>
                            <a href={`https://www.reddit.com/r/${post.data.subreddit}`}>{post.data.title}</a>
                        </h3>
                        <div>
                            <Link to={`/subreddit/${post.data.subreddit}`}>r/{post.data.subreddit}</Link>
                            <p>Comments: {post.data.num_comments} - Ups: {post.data.ups}</p>
                        </div>
                    </article>
                );
            })}
        </div>
    );
}

export default Articles;