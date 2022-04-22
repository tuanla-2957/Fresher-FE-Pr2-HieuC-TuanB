import React, { useEffect } from "react";
import "./Post.scss";
import { useDispatch, useReducer, useSelector } from "react-redux";
import { getPostRequest } from "../../actions/posts.action";
import { Button } from "react-bootstrap";

const Post = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPostRequest({ page: 1, perPage: 9 }));
  }, []);

  return (
    <div className='post-container'>
      <div className='container'>
        <h2>Explore the world by our newest Post !</h2>
        <div className='post-grid'>
          {posts.map((post) => (
            <div className='post-item'>
              <img src={post.avatar} alt=''/>
              <div className='post-item__content'>
                <h5>{post.title}</h5>
                <Button variant='dark'>More</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Post;
