import React from 'react';
import './Filter.scss';

class Filter extends React.Component{
  render(){
    const {filter} = this.props;
    return(
      <div className="field__container">
          <input type="text" name="filter__name" id="filter" onChange={filter} placeholder="Filtra pokemons por nombre..."/>
       </div>
    );
  }  
}

export default Filter;