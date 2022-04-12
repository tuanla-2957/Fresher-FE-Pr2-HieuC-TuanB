import React from 'react';
import './ContactBlock.scss'

const ContactBlock = ({ contacts }) => {
    return (
        contacts.map( (item,index) => {
            return (
                <a href={item.src} alt={item.alt} className='contact__block' key={index} >
                    <i className={item.className}></i>
                </a>
            )
        })
    );
};

export default ContactBlock;
