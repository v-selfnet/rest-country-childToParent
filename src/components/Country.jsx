import React from 'react';
import './Country.css'

const Country = ({country, handelCart}) => {
    // console.log(country)
    const {cca3, name, flags, capital, population, region, languages, timezones} = country;

    let language = [];
    for(const lang in languages){
        language.push(lang)
    }
    
    // console.log(language);

    return (
        <div className='country-container'>
            <h2>{name.common}</h2>
            <img src={flags.png} alt="..." />
            <p>Capital: {capital}</p>
            <p>Population: {population}</p>
            <p>Region: {region}</p>
            <p>Languages: {language}</p>
            <p>Timezones: {timezones[0]}</p>
            <button onClick={ () => handelCart(country)}>Add to Cart</button>
        </div>
    );
};

export default Country;