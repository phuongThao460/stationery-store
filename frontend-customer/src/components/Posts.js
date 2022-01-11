import React from 'react';
import { Link } from 'react-router-dom';

import './Category/Category.css'

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      {posts.map(post => (
        <div className="containerCate">
        <Link to={"/products/" + post._id}> 
        <img src={post.hinh_anh} alt="Avatar" className="image"/>
        <div className="overlay">
          <div className="text">{post.ten_sp}</div>
          <div className="price">${post.gia_ban_hien_tai}</div>
        </div>
         </Link> 
      </div>
      ))}
    </>
  );
};

export default Posts;