import React from 'react';
import PostCardColumn from '../post-card-column';
import './style.scss';

const LatestPosts = ({ posts }) => {
  return (
    <div className="latest-posts">
      <h2 className="latest-posts-title">Latest Posts</h2>
      <PostCardColumn posts={posts} showMoreButton={false} moreUrl="" />
    </div>
  );
};

export default LatestPosts;
