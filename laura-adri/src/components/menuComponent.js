import React, { Component } from 'react';

import '../App.css';


export default class MenuComponent extends Component {

  linkHotels = ()=> {
    this.props.navigateH()
  }
  linkBoda = ()=> {

    this.props.navigateB()
  }
  linkDress = ()=> {
    this.props.navigateD()
  }
  linkRs = ()=> {
    this.props.navigateR()
  }
  linkRegals = ()=> {
    this.props.navigateH()
  }
  // linkHotels = ()=> {
  //   this.props.navigateH()
  // }


  render() {
    return (
      <div className="menuWrapper animated fadeIn">
        <div className='boda'>
          <img onClick={this.linkBoda} className="bodaIcon" src={require ("../assets/ring.png")}/>
          <h2>La Boda</h2>
        </div>
        <div className='hotels'>
          <img onClick={this.linkHotels} className="bodaIcon" src={require ("../assets/hotel.png")}/>
          <h2>Hotels</h2>
        </div>
        <div className='dresscode'>
          <img onClick={this.linkDress} className="bodaIcon" src={require ("../assets/dresscode.png")}/>
          <h2>Dress Code</h2>
        </div>
        <div className='rsvp'>
          <img onClick={this.linkRs} className="bodaIcon" src={require ("../assets/rsvp.png")}/>
          <h2>Vindràs</h2>
        </div>
        <div onClick={this.linkRegals} className='regal'>
          <img className="bodaIcon" src={require ("../assets/regals.png")}/>
          <h2>No clicar!</h2>
        </div>
      </div>
    );
  }
}
