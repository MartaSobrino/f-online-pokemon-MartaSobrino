import React from 'react';

class Item extends React.Component{
  render(){
    const {item} = this.props;
    return(
      <React.Fragment>
        <h2>{item.name}</h2>
        <p>{item.id}</p>
        <img src={item.sprites.front_default} alt="imagen_pokemon"/>
        <ul>{item.types
          .map(item => 
            <li key={item.type.name}>{item.type.name}</li>
          )}
        </ul>
      </React.Fragment>
    );
  }
}

export default Item;