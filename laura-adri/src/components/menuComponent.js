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
    this.props.navigateRegals()
  }
  // linkHotels = ()=> {
  //   this.props.navigateH()
  // }


  render() {
    return (
      <div className="menuWrapper animated fadeInLeft">
        <div onClick={this.linkBoda} className='boda'>
          <img onClick={this.linkBoda} className="bodaIcon1" src={require ("../assets/ring.png")}/>
          <h2>La Boda</h2>
        </div>
        <div className='bottom_icons'>
          <div onClick={this.linkHotels} className='hotels'>
            <img  className="bodaIcon" src={require ("../assets/hotel.png")}/>
            <h2>Hotels</h2>
          </div>
          <div onClick={this.linkDress} className='dresscode'>
            <img className="bodaIcon" src={require ("../assets/dresscode.png")}/>
            <h2>Dress Code</h2>
          </div>
          <div onClick={this.linkRs} className='rsvp'>
            <img  className="bodaIcon" src={require ("../assets/rsvp.png")}/>
            <h2>Confirma</h2>
          </div>
          <div className='regal' onClick={this.linkRegals} >
            <img className="bodaIcon" src={require ("../assets/regals.png")}/>
            <h2>Regal</h2>
          </div>
      </div>
    </div>
    );
  }
}
