import React from 'react';
import { Link } from "react-router-dom";
import './Category.scss'

const Category = ({category}) => {
    return (
        <div className='category'>
            <div style={{['--aspect']: '0.75' }}>
                <div className='category-wrapper'>
                    <div className="category__img">
                        <img src={category.src}
                        alt='categoryes'/>
                    </div>
                    <Link to='./category' className='category__link'>

                    </Link>
                    <span className='text__title'>{category.name}</span>
                </div>
            </div>
        </div>
    );
};

export default Category;
