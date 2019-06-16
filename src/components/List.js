import React from 'react';
import Item from './Item';
import './List.scss'

class List extends React.Component{
  render(){
    const {dataList, filterName} = this.props;
    return(
      <div className="info__container">
        <ul className="list__container">
          {dataList
          .filter(item => item.name.includes(filterName))
          .map((item, index)=>
            <li className="item__list" key={index}>
              <Item
                item={item}
              />
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default List;