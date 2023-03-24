import React from 'react';
import './cosmetic.css'

const Cosmetic = (props) => {
    const {id, name, price} = props.cosmetic;
    const addToCart = (id) =>{
        console.log('ggs', id)
    }

    const addToCartWithParam = () => addToCart(id)
    return (
        <div className='product'>
            <h2>Buy this: {name}</h2>
            <p>Only for: ${price}</p>
            <p><small>ID:{id}</small></p>
            {/* <button onClick={addToCartWithParam}>Add co cart</button> */}
            {/* shortcut */}
            <button onClick={() => addToCart(id)}>Purchase</button>
        </div>
    );
};

export default Cosmetic;