import React, { Component } from 'react';

import './App.css';
import './animate.css'


import NavBar from './components/navBar'
import MenuComponent from './components/menuComponent'

//subcomponents
import Horari from './components/horari'
import DressCode from './components/dressCode'
import Regals from './components/regals'
import Rsvp from './components/rsvp'
import Hotels from './components/hotels'
import WelcomePage from './components/welcomePage'

class App extends Component {
  constructor(){
       super();
       this.state = {render:''}
   }

   handleClick(compName, e){
       console.log(compName);
       this.setState({render:compName});
   }
   renderSubComp(){
       switch(this.state.render){
           case 'menu': return <MenuComponent/>
           case 'boda' : return <Horari/>
           case 'regals': return <Regals/>
           case 'dress': return <DressCode/>
           case 'hotels': return <Hotels/>
           case 'rsvp': return <Rsvp/>
       }
   }

   renderMain = ()=> {
     if (!this.state.render){
       return <WelcomePage/>
     }
   }

   reset = ()=> {
     this.setState({render: ""})
   }

  render() {
    return (
      <div className="appContainer">
        {/* <NavBar/> */}
        <div className="topMenu__wrapper">
          <div className="topMenu__logo">
            <h1  onClick={this.reset}className="topMenu__title animated fadeIn">Laura i Adri</h1>
          </div>
          <div className='imageHolder'>
            <img className="menuIcon" src={require ("./assets/menu.png")}/>
          </div>
          {/* <img className="bodaIcon" src={require ("../assets/menu.png")}/> */}
          <ul className="topMenu animated fadeIn">
                {/* <li onClick={this.logger.bind(this)}>La Boda</li> */}
            <li onClick={this.handleClick.bind(this, 'boda')}>La Boda</li>
            <li onClick={this.handleClick.bind(this, 'dress')}>Vestimenta</li>
            <li onClick={this.handleClick.bind(this, 'rsvp')}>RSVP</li>
            <li onClick={this.handleClick.bind(this, 'hotels')}>Hotels</li>
            <li onClick={this.handleClick.bind(this, 'regals')}>Regal</li>
            {/* <li>Vestimenta</li>
            <li>RSVP</li>
            <li>Album</li>
            <li>Video</li>
            <li>Regal</li> */}
          </ul>

        </div>
        {this.renderMain()}
        {this.renderSubComp()}
        {/* <MenuComponent/> */}

      </div>

    );
  }
}

export default App;
