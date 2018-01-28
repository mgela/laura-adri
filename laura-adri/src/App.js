import React, { Component } from 'react';

import './App.css';
import './animate.css'


import Landing from './components/landing'
import MenuComponent from './components/menuComponent'
class App extends Component {
  render() {
    return (
      <div className="appContainer">
        {/* <Landing/> */}
        <div className="topMenu__wrapper">
          <div className="topMenu__logo">
            <h1 className="topMenu__title">Laura i Adri</h1>
          </div>
          <ul className="topMenu animated fadeInRight">
            <li>La Boda</li>
            <li>Hotels</li>
            <li>Vestimenta</li>
            <li>RSVP</li>
            <li>Album</li>
            <li>Video</li>
            <li>Regal</li>
          </ul>
        </div>
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
