import React from 'react';
import { More } from '../UI/Button/Button';
import './Post.scss'
import parse from 'html-react-parser';
import { Link } from "react-router-dom";

const Post = ({post}) => {
    return (
        <div className='post'>
            <div className="post-wrapper card">
                <div style={{['--aspect']: '1.33' }}>
                    <img className="card-img-top" src={post.avatar} 
                        alt="newPost" />
                </div>
                <div className="card-body">
                    <div className='card__row'>
                        <span className='card__author'>by {post.createdBy.userName}</span>
                        <span>
                            <Link to='/' className='comment'>
                                <i className="fas fa-comment me-1"></i>
                                <span></span>
                            </Link>
                        </span>
                    </div>
                    <div className='card__title'>
                        <span>{post.title}</span>
                    </div>
                    <p className='card__text'>
                        {parse(post.post)}
                    </p>
                    <div className='card__button'>
                        <More />
                    </div>
                </div>
            </div>
            <Link to='./post' className='card-wrapper'>

            </Link>
        </div>
    );
};

export default Post;
