import React from 'react';
import './cosmetic.css'

const Cosmetic = (props) => {
    const {id, name, price} = props.cosmetic
    return (
        <div className='product'>
            <h2>Buy this: {name}</h2>
            <p>Only for: ${price}</p>
            <p><small>ID:{id}</small></p>
        </div>
    );
};

export default Cosmetic;