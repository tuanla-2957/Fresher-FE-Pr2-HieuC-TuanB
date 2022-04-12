import React from 'react';
import './InputSearch.scss'

const InputSearch = () => {
    return (
        <form className='search input-group'>
            <input className='input input-outline' type='search' placeholder='search...' />
            <button type="submit" value="Submit" className='button-search'>
                <i className="fas fa-search"></i>
            </button>
        </form>
    );
};

export default InputSearch;
