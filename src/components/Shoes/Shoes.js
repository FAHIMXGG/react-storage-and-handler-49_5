import React from 'react';
import { add, multiply } from '../../utilitis/calcu';

const Shoes = () => {
    const first = 64;
    const second = 6;
    const result = multiply(first, second)
    const sum = add(first, second)
    return (
        <div>
            <h1>Shoes</h1>
            <p>total: {result}</p>
            <p>sum: {sum}</p>
        </div>
    );
};

export default Shoes;