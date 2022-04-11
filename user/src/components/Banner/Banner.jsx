import React from 'react';
import './Banner.scss';
import { Carousel } from 'react-bootstrap';
import { banner } from './data';

const Banner = () => {
    return (
        <div className='banner'>
            <Carousel fade>
                {banner.map((image,index) => {
                    return (
                        <Carousel.Item key={index}>
                            <img
                                className="d-block w-100"
                                src={image.src}
                                alt={image.alt}
                            />
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        </div>
    );
};

export default Banner;
