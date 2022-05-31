import React from "react";
import {useParams} from "react-router-dom";

function Subreddit() {
    const { subredditId } = useParams();
    return console.log({subredditId});
}

export default Subreddit;