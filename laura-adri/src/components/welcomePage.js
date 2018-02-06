import React, { Component } from 'react';
import MediaQuery from 'react-responsive';

import backgroundMobile from '../assets/mobile.jpg'
import backgroundDesktop from '../assets/desktop.jpg'
import save from '../assets/save.jpg'

import '../App.css';


export default class WelcomePage extends Component {
  render() {
    return (
      <div className="image__wrapper">
        <MediaQuery query="(max-width: 900px)">
          <img className="saveTheDateMobile animated fadeIn" src={backgroundMobile}/>
        </MediaQuery>
        <MediaQuery query="(min-width: 900px)">
          <img className="saveTheDateDesktop animated fadeIn" src={backgroundDesktop}/>
        </MediaQuery>
        {/* <h1 className="text__save animated fadeIn">Save The Date  7-7-2018</h1> */}
        {/* <img className="saveTheDate animated fadeIn" src={background}/> */}
      </div>
    );
  }
}
