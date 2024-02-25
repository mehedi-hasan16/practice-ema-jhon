import React from 'react';

const Cart = ({ cart }) => {


    let total = 0;
    let shipping = 0;
    for (const product of cart) {
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    const tax = total * 7 / 100;
    const grandTotal = total + shipping + tax;


    return (
        <div className='sticky top-0'>
            <h1 className='font-bold text-2xl mb-2'>Order Summary</h1>
            <p>Total selected: {cart.length}</p>
            <p>Total price: {total}</p>
            <p>Total shipping: {shipping}</p>
            <p>Tax: {tax.toFixed(2)}</p>
            <p>Grand Total: {grandTotal.toFixed(2)}</p>
            <div className='flex flex-col items-start gap-2 mt-2'>
                <button className='border border-2 p-2 font-bold bg-red-600'>Delete Cart Item</button>
                <button className='border border-2 p-2 font-bold bg-green-600'>Buy Now</button>
            </div>
        </div>
    );
};

export default Cart;