import React from 'react';
import './InfoBlock.scss';
import { Link } from 'react-router-dom';

const InfoBlock = ({ infos }) => {
    return (
        infos.map( (item,index) => {
            return (
                <Link to={item.src} alt={item.alt} key={index} >
                    <i className={item.className}></i>
                </Link>
            )
        })
    );
};

export default InfoBlock;