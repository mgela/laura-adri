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

  linkBoda = ()=> {
    this.props.navigateBoda()
  }
  linkHotels = ()=> {
    this.props.navigateH()
  }
  linkDress = ()=> {
    this.props.navigateD()
  }
  linkRsvp = ()=> {
    this.props.navigateR()
  }
  linkRegals = ()=> {
    this.props.navigateRegals()
  }

  clickMenu = ()=> {
    this.props.showMenu();
  }
  iconChoser = ()=> {
    if (this.props.state.menuVisible){
      return (
        <img className="menuIcon" onClick={this.clickMenu} src={require ("../assets/menu.png")}/>
      )
    } else return <img className="menuIcon" onClick={this.clickMenu} src={require ("../assets/closemenu.png")}/>

  }
  //
  render() {
    return (
      <div className="topMenu__wrapper">
        <div className="topMenu__logo">
          <h1 onClick={this.props.reset} className="topMenu__title ">L & A</h1>
        </div>
        <div className='imageHolder'>
          {/* {this.iconChoser} */}
          <img className="menuIcon" onClick={this.clickMenu} src={require ("../assets/menu.png")}/>
        </div>
        <ul className="topMenu animated fadeIn">
          <li>La Boda</li>
          <li onClick={this.linkHotels}>Hotels</li>
          <li onClick={this.linkDress}>Vestimenta</li>
          <li onClick={this.linkRsvp}>RSVP</li>
          <li>Album</li>
          <li>Video</li>
          <li onClick={this.linkRegals}>Regal</li>
        </ul>
      </div>
    );
  }
}
