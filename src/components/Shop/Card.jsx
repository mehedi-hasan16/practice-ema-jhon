import React from 'react';

const Card = (props) => {
    const { img, name, seller, price, ratings } = props.product;
    const  handelAddToCart  = props.handelAddToCart;

    return (
        <div>
            <div className='border border-2 p-2 w-72'>
                <img src={img} alt="" />
                <h1 className='text-1xl font-bold'>{name}</h1>
                <p className='font-bold'>Price: ${price}</p>
                <p>Rating: {ratings}</p>
                <p>Seller: {seller}</p>
                <button onClick={() => handelAddToCart(props.product)} className='border border-2 p-2 font-bold bg-yellow-500'>Add to cart</button>

            </div>
        </div>
    );
};

export default Card;