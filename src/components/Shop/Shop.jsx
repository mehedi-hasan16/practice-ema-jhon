import React, { useEffect, useState } from 'react';
import Card from './Card';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCard] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        const storedData = getShoppingCart();
        const savedCart =[]
        //1st 
        for (const id in storedData) {
            const addedProduct = products.find(product => product.id === id);
            console.log(addedProduct);
            //2nd step
            if (addedProduct) {

                const quantity = storedData[id];
                addedProduct.quantity = quantity;
                console.log(quantity);
                savedCart.push(addedProduct);
            }
        }
        setCard(savedCart);
    }, [products])

    const handelAddToCart = (item) => {
        const newItem = [...cart, item];
        setCard(newItem);
        addToDb(item.id);
    }
    return (
        <div className='flex justify-between'>
            <div>
                <h1 className='text-2xl font-bold text-center p-3'>All Products in here</h1>
                <div className='grid grid-cols-4 gap-5'>
                    {
                        products.map(product => <Card key={product.id} product={product} handelAddToCart={handelAddToCart}></Card>)
                    }
                </div>
            </div>
            <div className='bg-yellow-500 p-5'>
                <Cart cart={cart}></Cart>

            </div>
        </div>
    );
};

export default Shop;