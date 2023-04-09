import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    
    return (
        <div className='cart'>
            <h3>Summery: {cart.length}</h3>
            <hr />
            {
                cart.map(country => <p>{country.cca3}</p>)
            }
        </div>
    );
};

export default Cart;