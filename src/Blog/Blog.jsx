import React from 'react';
import Header from '../Header/Header';
import './blog.css'
import Question from './Question';
const Blog = () => {
    return (
        <div>
           <header className='text-center text-5xl blogheader py-14'>
            <h1>--FAQ--</h1>
           </header>
           
           <div className='mx-36'>
            <Question/>
           </div>
            
        </div>
    );
};

export default Blog;