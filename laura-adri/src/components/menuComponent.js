import React, { Component } from 'react';

import '../App.css';


export default class MenuComponent extends Component {
  // constructor(){
  //      super();
  //      this.state = {render:''}
  //  }
  //  handleClick(compName, e){
  //      console.log(compName);
  //      this.setState({render:compName});
  //  }
  //  renderSubComp(){
  //      switch(this.state.render){
  //          case 'chockers': return <Chokers/>
  //          case 'bracelets' : return <Bracelets/>
  //          case 'rings': return <FRings/>
  //      }
  //  }
  //  render() {
  //     return (
  //         <div className="App">
  //             <ul style={{display: 'inline'}}>
  //                 <li onClick={this.handleClick.bind(this, 'chockers')}>Chokers</li>
  //                 <li onClick={this.handleClick.bind(this, 'bracelets')}>Bracelets</li>
  //                 <li onClick={this.handleClick.bind(this, 'rings')}>Rings for Women</li>
  //             </ul>
  //             {this._renderSubComp()}
  //         </div>
  //     );
  // }
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
