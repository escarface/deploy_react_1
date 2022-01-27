// Esto es un componente en base a funciones
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';



const PrimeraApp = ( { saludo, subtitulo } ) => {

    
    return (
        <Fragment>
        <pre>{ saludo }</pre>
        <p>{ subtitulo }</p>
        </Fragment>
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = { 
    saludo: 'Hola Mundo',
    subtitulo: 'Soy un subtitulo'
}


export default PrimeraApp;
