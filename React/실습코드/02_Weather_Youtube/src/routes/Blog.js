import React from 'react';
import axios from 'axios';

const ROOT_URL = `http://127.0.0.1:8800/api/blogs`;

export async function fetchBlog() {
    const url = `${ROOT_URL}`
    const request = await axios.get(ROOT_URL);

    console.log("???????????");
}


const Blog = () => {

    axios.get('http://127.0.0.1:8800/api/blogs')
    .then( response => { console.log(response); } ) // SUCCESS
    .catch( response => { console.log(response); } ); // ERROR

    return (
        <div>
            Blog
            
        </div>
    );
};

export default Blog;