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
         case "": return <WelcomePage/>
     }
   }

   renderMain = ()=> {
     if (!this.state.render){
       return <WelcomePage/>
     }
   }


   reset = ()=> {
     this.setState({render: "", menuVisible: false})
     this.renderSubComp();
   }

   showMenu = ()=> {
     this.setState({menuVisible: !this.state.menuVisible})
     this.setState({render: ''})
   }

   menuOr = ()=> {
     if (this.state.menuVisible === true){
       return (
         <MenuComponent/>
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
          reset = {this.reset}
        />

        {this.menuOr()}
        {this.renderMain()}
        {/* {this.renderSubComp()} */}
        {/* <MenuComponent/> */}

      </div>

    );
  }
}

export default App;
