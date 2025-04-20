import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({handleMark}) => {
 
    const [blogs, setBlogs] =useState([])

    useEffect( () =>{
        fetch("blogs.json")
        .then(res => res.json())
        .then( data => setBlogs(data))
    },[])

// console.log(blogs)
    return (
        <div>
            <h1 className='font-semibold text-3xl'>Total Blogs: {blogs.length}</h1>
            <div className='grid grid-cols-2'>
                {
                    blogs.map(blog => <Blog handleMark={handleMark} key={blog.id} blog={blog}></Blog>)
                }
            </div>
        </div>
        
    );
};

export default Blogs;