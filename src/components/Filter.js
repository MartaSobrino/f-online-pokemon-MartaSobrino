import React from 'react';

class Filter extends React.Component{
  render(){
    const {filter} = this.props;
    return(
      <div className="field__container">
          <label htmlFor=""></label>
          <input type="text" name="filter__name" id="filter" onChange={filter} placeholder="nombre"/>
       </div>
    );
  }  
}

export default Filter;