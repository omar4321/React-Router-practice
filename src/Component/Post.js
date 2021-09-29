import React from 'react';
import { useParams } from 'react-router';

const Post = () => {
    const{catagory,topic} = useParams();
    return (
        <div>
                 <h2>this is Post page - {catagory}/{topic}</h2>  
        </div>
    );
};

export default Post;