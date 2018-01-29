import React, { Component } from 'react';

import '../App.css';
import '../animate.css';

export default class NavBar extends Component {
  constructor(props){
    super(props)
    this.state = {
      open: true,
    }
  }

  logger = ()=> {
    console.log(this.refs);
  }

  clickMenu = ()=> {
    this.props.showMenu();
  }
  //
  render() {
    return (
      <div className="topMenu__wrapper">
        <div className="topMenu__logo">
          <h1 onClick={this.props.reset} className="topMenu__title animated fadeIn">Laura i Adri</h1>
        </div>
        <div className='imageHolder'>
          <img className="menuIcon" onClick={this.clickMenu} src={require ("../assets/menu.png")}/>
        </div>
        <ul className="topMenu animated fadeIn">
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
