import React from 'react';
import Button from '../../common/Button/Button';

const PostCard = ( {item} ) => {
    
    const { image, title, category, author, date } = item;

  return (
    <div className="postCardContainer">
            <img className="postImage" src={image} alt="" />
            <button className="postCategory">{category}</button>
            <h2>{title}</h2>
            <Button text="Read More" />
            <div className="author">
                <img src={require('../../../assets/avatar.png')} alt="" />
                <div className="authorDes">
                    <p>{author}</p>
                    <p>{date}</p>
                </div>
            </div>
        </div>
  );
};

export default PostCard;