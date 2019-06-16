import React from 'react';
import Item from './Item';

class List extends React.Component{
  render(){
    const {dataList, filterName} = this.props;
    return(
      <div className="info__container">
        <ul>
          {dataList
          .filter(item => item.name.includes(filterName))
          .map((item, index)=>
            <li key={index}>
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