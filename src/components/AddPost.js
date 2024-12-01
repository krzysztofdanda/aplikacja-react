import './AddPost.css';

import { useState } from 'react';

import axios from 'axios';

const AddPost = (props) => {

    const [postContent, setPostContent] = useState('');

    const AddPost = (e) => {
        e.preventDefault();

        if (!postContent) {
            return;
        }


        axios.post("https://akademia108.pl/api/social-app/post/add", {
            content: postContent
        })
            .then(() => {
                props.getPrevPosts();
                setPostContent('');
                })
                .catch((error) => {
                    console.error(error);
                });

        return (
        <form className="addPostForm" onSubmit={AddPost}>
            <textarea placeholder="Add post..." onChange={(e) => setPostContent(e.target.value)} value={postContent}></textarea>
            <button className="btn">Add</button>
        </form>
       );
    
};
};



export default AddPost;