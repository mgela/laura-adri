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
       this.state = {
         render:'',
         menuVisible: false,
         loadHome: true,
       }
   }

   handleOption = (compName)=> {
     this.setState({render:compName})
     this.renderSubComp()
     console.log(this.state);
   }


   renderSubComp = ()=> {
     switch(this.state.render){
         case 'boda' : return <Horari/>
         case 'regals': return <Regals/>
         case 'dress': return <DressCode/>
         case 'hotels': return <Hotels/>
         case 'rsvp': return <Rsvp/>
     }
   }

   renderMain = ()=> {
     if (this.state.loadHome){
       return <WelcomePage/>
     }
   }

   reset = ()=> {
     this.setState({render: false, menuVisible: false, loadHome: true})
     this.renderSubComp();
   }
   showMenu2 = ()=> {
     this.setState({loadHome: true})
     this.setState({menuVisible: !this.state.menuVisible})
     this.setState({render: false})
   }
   showMenu = ()=> {
     this.setState({loadHome: !this.state.loadHome})
     this.setState({menuVisible: !this.state.menuVisible})
     this.setState({render: false})
   }
   //navigation
   navigateHotels = ()=> {
     this.setState({render: 'hotels', menuVisible: false, loadHome: false}),
     this.renderSubComp();
   }
   navigateBoda = ()=> {
     this.setState({render: 'boda', menuVisible: false, loadHome: false}),
     this.renderSubComp();
   }

   navigateDress = ()=> {
     this.setState({render: 'dress', menuVisible: false, loadHome: false}),
     this.renderSubComp();
   }

   navigateRsvp = ()=> {
     this.setState({render: 'rsvp', menuVisible: false, loadHome: false}),
     this.renderSubComp();
   }
   navigateRegals = ()=> {
     this.setState({render: 'regals', menuVisible: false, loadHome: false}),
     this.renderSubComp();
   }

   menuOr = ()=> {
     if (this.state.menuVisible === true){
       return (
         <MenuComponent
           handleLink={this.handleOption}
           handleRender={this.renderSubComp}
           reset={this.reset}
           showMenu = {this.showMenu}
           navigateH = {this.navigateHotels}
           navigateB = {this.navigateBoda}
           navigateD = {this.navigateDress}
           navigateR = {this.navigateRsvp}
           navigateRegals = {this.navigateRegals}

        />
       )
     } else {
      this.renderSubComp()
     }
   }


  render() {
    return (
      <div className="appContainer">
        <NavBar
          handle = {this.handleOption}
          showMenu = {this.showMenu}
          showMenu2 = {this.showMenu2}
          reset = {this.reset}
          state={this.state}
          navigateH = {this.navigateHotels}
          navigateB = {this.navigateBoda}
          navigateD = {this.navigateDress}
          navigateR = {this.navigateRsvp}
          navigateRegals = {this.navigateRegals}
        />

        {this.menuOr()}
        {this.renderMain()}
        {this.renderSubComp()}
        {/* <DressCode/> */}

      </div>

    );
  }
}

export default App;
