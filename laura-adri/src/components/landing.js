import React, { Component } from 'react';

import '../App.css';
import '../animate.css';

export default class Landing extends Component {
  //
  render() {
    return (
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
    );
  }
}
