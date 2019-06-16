import React from 'react';
import './App.css';

const ENDPOINT = 'http://pokeapi.salestock.net/api/v2/pokemon/?limit=25'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dataList: [],
      filterName: ''
    }
    this.fetchData = this.fetchData.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }

  componentDidMount(){
    this.fetchData();
  }

  fetchData(){
    fetch(ENDPOINT)
    .then(response => response.json())
    .then(data => {
      data.results.map(item => 
        fetch(item.url)
        .then(response => response.json())
        .then(datados=>{
          this.setState({
            dataList:  [...this.state.dataList, datados]
          });
          localStorage.setItem('data', JSON.stringify(this.state.dataList));
        })
    )
  })
  }

  handleFilter(event){
    const trigger = event.currentTarget.value;
    this.setState ({
      filterName: trigger
    })
  }

  render(){
    console.log(this.state.dataList);
    const {dataList} = this.state;
    return (
      <React.Fragment>
        <div className="field__container">
          <label htmlFor=""></label>
          <input type="text" name="" id=""/>
        </div>
        <div className="info__container">
          <ul>
            {dataList
              .map(item=>
                <li key={item.id}>
                  <h2>{item.name}</h2>
                  <p>{item.id}</p>
                  <img src={item.sprites.front_default} alt="imagen_pokemon"/>
                  <ul>{item.types
                    .map(item => 
                        <li key={item.type.name}>{item.type.name}</li>
                    )}
                  </ul>
                </li>
              )}
          </ul>
        </div>
      </React.Fragment>
      );
  }
}

export default App;
