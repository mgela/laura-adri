import React, { Component } from 'react';

import '../App.css';


export default class MenuComponent extends Component {

  render() {
    return (
      <div className="menuWrapper">
        <div className='boda'>
          <img className="bodaIcon" src={require ("../assets/ring.png")}/>
          <h2>La Boda</h2>
        </div>
        <div className='hotels'>
          <img className="bodaIcon" src={require ("../assets/hotel.png")}/>
          <h2>Hotels</h2>
        </div>
        <div className='dresscode'>
          <img className="bodaIcon" src={require ("../assets/dresscode.png")}/>
          <h2>Dress Code</h2>
        </div>
        <div className='rsvp'>
          <img className="bodaIcon" src={require ("../assets/rsvp.png")}/>
          <h2>Vindràs</h2>
        </div>
        <div className='regal'>
          <img className="bodaIcon" src={require ("../assets/regals.png")}/>
          <h2>No clicar!</h2>
        </div>
      </div>
    );
  }
}
