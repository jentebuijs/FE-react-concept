import './home.css';
import React, {useEffect, useState} from "react";
import axios from "axios";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Articles from "../../components/articles/articles";

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
            <Header
                image="./././assets/logo.png"
            />
            <main className="outer-container">
                <div className="inner-container">
                    <h1>Hottest posts</h1>
                    <h4>on Reddit right now</h4>
                    <Articles posts={posts} />
                </div>
            </main>
            <Footer/>
        </>
    );
}

export default Home;