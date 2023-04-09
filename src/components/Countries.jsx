import React from 'react';
import {useLoaderData} from 'react-router-dom';
import Country from './Country';
import './Countries.css';
import Cart from './Cart';
import { useState } from 'react';

const Countries = () => {
    const countries = useLoaderData();

    const [cart, setCart] = useState([]);
    const handelCart = country =>{
        // console.log(id);
        const newCart = [...cart, country];
        setCart(newCart);
    }
    return (
        <>
            <h1>Total Countries: {countries.length}</h1>
            <div className='container'>
                <div className='countries-container'>
                    {
                        countries.map(country => <Country
                            key={country.cca3}
                            country={country}
                            handelCart={handelCart}
                        ></Country>)
                    }
                </div>
                <div>
                    <Cart cart={cart}></Cart>
                </div>
                
            </div>
        </>
    );
};

export default Countries;