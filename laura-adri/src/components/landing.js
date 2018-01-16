import React, { Component } from 'react';

import '../App.css';
import '../animate.css';

export default class Landing extends Component {
  render() {
    return (
      <div className="topMenu__wrapper">
        <div className="topMenu__logo animated fadeIn">
          <h1 className="adrilaura">LaurAdri</h1>
        </div>
        <ul className="topMenu animated fadeIn">
          <li>Informació Boda</li>
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
