import './Home.css';

import axios from "axios";
import { useEffect, useState } from "react";
import Post from "../components/Post";

const Home = () => {
    const [posts, setPosts] = useState([])

    const getLatesPosts = () => {

        axios.post("https://akademia108.pl/api/social-app/post/latest")
         .then((req)=>{
            
            setPosts(req.data)
         })
         .catch((error) => {
            console.error(error);
        });
    

    };

    useEffect(()=>{
        getLatesPosts();
    }, [])

    console.log(posts)
    return (
        <div className="home">
            <div className="postList">{posts.map((post) => {
                    return <Post post={post} key={post.id} />;
                })}
            </div>
        </div>

    );
}

export default Home;