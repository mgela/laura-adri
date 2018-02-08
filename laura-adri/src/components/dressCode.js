import React, { Component } from 'react';
import Slider from 'react-slick'
import '../App.css';




export default class DressCode extends Component {

  render() {

    return (
      <div className="dresscode__wrapper">
        <div className="elles">
          <h3>ELLES</h3>
          <h5>De llarg, i el blanc li deixem a la nòvia</h5>
        </div>
        <div className="ells">
          <h3>ELLS</h3>
          <h5> De Fosc, i amb corbata </h5>
        </div>
      </div>
    );
  }
}
