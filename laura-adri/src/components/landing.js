import React, { Component } from 'react';

import '../App.css';

export default class Landing extends Component {
  render() {
    return (
      <div className="topMenu__wrapper">
        <div className="topMenu__logo">
          <h1>LOGO GOES HERE</h1>
        </div>
        <ul className="topMenu">
          <li>Informacio Boda</li>
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
