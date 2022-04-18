import React from 'react';
import { useState } from 'react';
import './Quantity.scss'

const Quantity = (props) => {
    const { quantity, productId, onChangeQuantity } = props
    const [valueQuantity, setValueQuantity] = useState(quantity)
    const handlePlus = (quantity) => {
        setValueQuantity(quantity + 1)
        onChangeQuantity(quantity + 1, productId)
    }

    const handleMinus = (quantity) => {
        if (quantity <= 0) {
            setValueQuantity(0)
        } else {
            setValueQuantity(quantity - 1)
            onChangeQuantity(quantity - 1, productId)
        }
    }

    const handleChange = (e) => {
        if (Number(e.target.value) <= 0) {
            setValueQuantity(0)
        } else {
            setValueQuantity(Number(e.target.value))
            onChangeQuantity(Number(e.target.value), productId)
        }
    }

    return (
        <div className='quantity'>
            <button type='button' className='button button__trans minus' onClick={() => handleMinus(Number(valueQuantity))}>
                -
            </button>
            <input
                type='number' className='input__quantity'
                value={valueQuantity}
                onChange={(e) => handleChange(e)} />
            <button type='button' className='button button__trans plus' onClick={() => handlePlus(Number(valueQuantity))}>
                +
            </button>
        </div>
    );
};

export default Quantity;
