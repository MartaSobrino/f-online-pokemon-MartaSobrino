import React from 'react';
import {data} from './service/data';
import Filter from './components/Filter';
import List from './components/List';
import './App.css';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dataList: JSON.parse(localStorage.getItem('data')) || [],
      filterName: ''
    }
    this.fetchData = this.fetchData.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }

  componentDidMount(){
    this.fetchData();
  }

  fetchData(){
    data()
    .then(data => {
      data.results.map(item => 
        fetch(item.url)
        .then(response => response.json())
        .then(itemData=>{
          this.setState({
            dataList:  [...this.state.dataList, itemData]
          });
          localStorage.setItem('data', JSON.stringify([...this.state.dataList,itemData]));
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
    const {dataList, filterName} = this.state;
    return (
      <React.Fragment>
        <Filter 
          filter={this.handleFilter}
        />
        <List 
          dataList={dataList}
          filterName={filterName}
        />
      </React.Fragment>
      );
  }
}

export default App;
