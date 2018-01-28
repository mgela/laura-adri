import React, { Component } from 'react';

import '../App.css';


export default class WelcomePage extends Component {
  render() {
    return (
      <div className="image__wrapper">
        <h1 className="text__save animated fadeIn">Save The Date  7-7-2018</h1>
        <img className="saveTheDate animated fadeIn" src={require ("../assets/save.jpg")}/>
      </div>
    );
  }
}
