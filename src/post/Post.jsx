// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import "./Post.css"

import { data } from 'autoprefixer';
import { comment } from 'postcss';
import Comment from '../Comment/Comment';

const Post = (props) => {

    const [comments , setComments] = useState([])
    const {title ,  body , id} = props.post
  

    const handleClicked = () => {
        if(comments.length > 0)
        {   
            setComments([])
            return comments;
        }

       fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
       .then(res => res.json())
        .then (data  =>  setComments(data)) 
        
    } 
   
    
    
    return (
        <>
            <div className='shadow-md bg-red-200 mt-4 rounded p-2' onClick={handleClicked} >
                <h1 className='text-xl'>{title}</h1>
                <p className='text-gray-600 mt-5'>{body}</p>


                <div >
                   {
                    comments.map(comment => <Comment key={comment.id} comment= {comment} ></Comment>)
                   } 
                   <div>

                   </div>
                </div>
            </div>

            
        </>
    );
};

export default Post;