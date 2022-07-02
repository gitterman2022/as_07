import React from 'react';
import PostCard from './PostCard';
import data from '../../../database/postdata.json';
import './Posts.css'

const Posts = () => {
  return (
    <div>
            <h2>Latest Blog</h2>
            <div className="allPosts">
                {
                    data.map(item => <PostCard item={item} />)
                }
            </div>
        </div>
  );
};

export default Posts;