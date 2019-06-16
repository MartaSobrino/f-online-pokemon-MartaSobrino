import React from 'react';
import './Item.scss';

class Item extends React.Component{
  render(){
    const {item} = this.props;
    return(
      <React.Fragment>
        <div className="top_info">
          <img className="poke__image" src={item.sprites.front_default} alt="imagen_pokemon"/>
          <p className="poke__id">{`ID/${item.id}`}</p>
        </div>
        <div className="bottom__info">
          <h2 className="poke__name">{item.name}</h2>
          <ul className="types__container">{item.types
            .map(item => 
              <li className="single__type" key={item.type.name}>{item.type.name}</li>
            )}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default Item;