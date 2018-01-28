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
    this.setState({open: false})
  }
  //
  render() {
    return (
      <div className="topMenu__wrapper">
        <div className="topMenu__logo">
          <h1 className="topMenu__title">Laura i Adri</h1>
        </div>
        <div className='imageHolder'>
          <img className="menuIcon" src={require ("../assets/menu.png")}/>
        </div>
        {/* <img className="bodaIcon" src={require ("../assets/menu.png")}/> */}
        <ul className="topMenu animated fadeInRight">
              <li onClick={this.logger.bind(this)}>La Boda</li>


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
