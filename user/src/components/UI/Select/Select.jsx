import React from 'react';
import './Select.scss'

const Select = (props) => {
    const { title, data } = props
    return (
        <div className='select'>
            <span className='select__title'>
                {title}
                <i className='fas fa-angle-down ms-1'></i>
            </span>
            <ul className='option'>
                {data.map( (option, index) => {
                    return(
                        <li className='option__item' key={index}>{option}</li>
                    )
                })}
            </ul>
        </div>
    );
};

export default Select;
