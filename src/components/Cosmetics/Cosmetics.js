import React, { useEffect, useState } from 'react';
import { getTotal } from '../../utilitis/calcu';
import Cosmetic from '../Cosmetic/Cosmetic';

const Cosmetics = () => {

    
    const [cosmetics, setCosmetic] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCosmetic(data))
    },[])


    const total = getTotal(cosmetics)
        
    return (
        <div>
            <h1>welcome to my store</h1>
            <p>money needed {total}</p>
            {
                cosmetics.map(cosmetic => <Cosmetic 
                    key={cosmetic.id}
                    cosmetic ={cosmetic}
                    
                ></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;