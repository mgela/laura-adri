import { withFormsy } from 'formsy-react';
import React, { Component } from 'react';
import { RadioGroup, RadioButton, ReversedRadioButton } from 'react-radio-buttons'
import platja from '../assets/ells/platja.jpg'

import '../App.css';


export default class Rsvp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: '',
      acompanyant: '',
    };
  }

renderButton = ()=> {
  if (!this.state.nom || !this.state.acompanyant) return <button className="buttonForm" disabled={true} >Enviar</button>
  else return <button disabled={false} className="hvr-grow buttonForm" onClick={this.sendConfirmation}>Enviar</button>
}
  captureNom = (evt)=> {
    this.setState({
      nom: evt.target.value
    });
  }
  captureNomAcompanyant = (evt)=> {
    this.setState({
      acompanyant: evt.target.value
    });
  }

  sendConfirmation = ()=> {
    // https://bodamailer.herokuapp.com/boda
    fetch('https://bodamailer.herokuapp.com/boda', {
       method: 'post',
       headers: {'Content-Type':'application/json'},
       body: JSON.stringify(this.state)
    });
  }

  render() {
    return (
      <div className="rsvp__wrapper">
        <div className="rsvp__right">
            <img className="rsvp__image" src={platja}/>
        </div>
        <div className="rsvp__left">
          <form>
            <h3>Confirma la teva Assistencia</h3>
            <h3>Nom i Cognom</h3>
            <input value={this.state.nom} onChange={evt => this.captureNom(evt)}/>
          </form>
          <form>
            <h3>Vindras amb acompanyant?</h3>
            <h3>Nom i Cognom del acompanyant</h3>
            <input value={this.state.acompanyant} onChange={evt => this.captureNomAcompanyant(evt)}/>
          </form>
          {this.renderButton()}
          {/* <button ref={btn} disabled={!this.state.nom} onClick={this.sendConfirmation}>Enviar</button> */}
        </div>

      </div>
    );
  }
}
