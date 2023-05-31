import React from 'react';

const MenuItem = ({item}) => {
    const {image, price, name, recipe} = item;
    return (
        <div>
            <img src={image} alt="" />
            <div>
                <h3 className='uppercase'>{name}------</h3>
                <p>{recipe}</p>
            </div>
            <p>{price}</p>
        </div>
    );
};

export default MenuItem;