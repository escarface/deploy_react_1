import React, { useState } from 'react';
import PropTypes from 'prop-types';


const CounterApp = ( {value = 0} ) => {

    const [counter, setCounter ] = useState( value );


    //handleAdd

    const handleAdd = () => {
        setCounter ( counter + 1 );
    }

    const handleSubstract = () => {
        setCounter ( counter - 1 );
    }

    const reset = () => {
        setCounter ( value );
    }




    return (
        <>
        <h1>App Contador Github</h1>
        <h2> { counter } </h2>

        <button onClick={ handleAdd }>Sumar</button>
        <button onClick={ reset }>Reset</button>
        <button onClick={ handleSubstract }>Restar</button>
        </>
    )
};

CounterApp.propTypes = { 
    value: PropTypes.number
};

export default CounterApp;
