import React, { Component } from 'react';

import './App.css';
import './animate.css'


import NavBar from './components/navBar'
import MenuComponent from './components/menuComponent'
class App extends Component {
  render() {
    return (
      <div className="appContainer">
        <NavBar/>

        <MenuComponent/>
        {/* <div className="image__wrapper">
          <h1 className="text__save animated fadeIn">Save The Date  7-7-2018</h1>
          <img className="saveTheDate animated fadeIn" src={require ("./assets/save.jpg")}/>
        </div> */}
      </div>

    );
  }
}

export default App;
