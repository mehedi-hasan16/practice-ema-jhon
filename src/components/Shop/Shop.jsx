import React, { useState } from 'react';
import Card from './Card';

const Shop = () => {
    const [products, setProducts]= useState([]);
    const [cart, setCard]= useState([]);
    useState(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    const handelAddToCart = (item) => {
        const newItem= [...cart, item];
        setCard(newItem);
    }
    return (
        <div className='flex justify-between'>
            <div>
                <h1>All Products in here</h1>
                <div className='grid grid-cols-4 gap-5'>
                {
                    products.map(product=><Card key={product.id} product={product} handelAddToCart={handelAddToCart}></Card>)
                }
                </div>
            </div>
            <div className='bg-yellow-500 p-5'>
                <h1 className='font-bold text-2xl mb-2'>Order Summary</h1>
                <p>Total selected: {cart.length}</p>

            </div>
        </div>
    );
};

export default Shop;