import React from 'react';
import'./Loader.scss';

class Loader extends React.Component{
  render(){
    return(
      <React.Fragment>
        <div className="wrapper">
          <div className="ring"></div>
          <div className="ball"></div>
        </div>
        <p className="loader__description">Cargando Pokemons. Espera un momento :)</p>
      </React.Fragment>
    );
  }
}

export default Loader;