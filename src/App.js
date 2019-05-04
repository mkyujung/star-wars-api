import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';
import './Stars.css';

class App extends Component { 
//State A: Initialising the state of the app. 
//This is the first lifecycle hook, mounting
  constructor() {
    super()
    this.state = {
      starships: [],
      searchfield: ''
    }
  }

//State B: Changing state of the app to fill in character content after 
// initialising
 
  componentDidMount() {
    fetch('https://swapi.co/api/starships/')
      .then(resp=> resp.json())
      .then(item=> this.setState({starships: item.results}));
  }


//State C: Changes state of the app, conditional on changes to searchfield
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

//displaying
render() {
    const { starships, searchfield } = this.state;
    const filteredShips = starships.filter(starship => {
      return starship.name.toLowerCase().includes(searchfield.toLowerCase());
    })

        return !starships.length ? 
          <h1>Loading</h1> :
            (
                <div id='app' className='vh-100 overflow-y-scroll'>
                  <div id='stars'></div>
                  <div id='stars2'></div>
                  <div id='stars3'></div>

                <div className='tc'>
                        <h1 className='f1'>Starships</h1>
                        <SearchBox searchChange={this.onSearchChange}/>
                        <CardList starships={filteredShips} />

                <p> Star Wars API </p>
                <p> MK 2019 </p>
                </div>
                </div>
            );
    }
}

export default App;