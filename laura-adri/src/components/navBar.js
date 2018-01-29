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
  //navigation
  linkBoda = ()=> {
    this.props.navigateB()
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
  clickMenu2 = ()=> {
    this.props.showMenu2();
  }
  //icon menu
  iconChoser = ()=> {
    if (this.props.state.menuVisible){
      return (
        <img className="menuIcon animated rotateIn" onClick={this.clickMenu2} src={require ("../assets/closemenu.png")}/>
      )
    } else return( <img className="menuIcon" onClick={this.clickMenu} src={require ("../assets/menu.png")}/> )
  }
  //
  render() {
    return (
      <div className="topMenu__wrapper">
        <h1 onClick={this.props.reset} className="topMenu__title ">L & A</h1>
        {/* <div className="topMenu__logo">
          <h1 onClick={this.props.reset} className="topMenu__title ">L & A</h1>
        </div> */}
        <div className='imageHolder'>
          {this.iconChoser()}
        </div>
        <ul className="topMenu animated fadeIn">
          <li onClick={this.linkBoda}>La Boda</li>
          <li onClick={this.linkHotels}>Hotels</li>
          <li onClick={this.linkDress}>Vestimenta</li>
          <li onClick={this.linkRsvp}>RSVP</li>
          <li onClick={this.linkRegals}>Regal</li>
        </ul>
      </div>
    );
  }
}
