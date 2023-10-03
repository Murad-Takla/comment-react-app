import React from 'react';
import './Comment.css'
import { comment } from 'postcss';
const Comment = (props) => {
   

   const {name , body} = props.comment 
   
    return (
        <div className='bg-red-300 mt-2 p-3 rounded-md'>
            <p>{name} - {body}</p>
        </div>
    );
};

export default Comment;