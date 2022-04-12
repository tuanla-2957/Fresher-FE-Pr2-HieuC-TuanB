import React from 'react';
import './InfoBlock.scss'

const InfoBlock = ({ infos }) => {
    return (
        infos.map( (item,index) => {
            return (
                <a href={item.src} alt={item.alt} key={index} >
                    <i className={item.className}></i>
                </a>
            )
        })
    );
};

export default InfoBlock;