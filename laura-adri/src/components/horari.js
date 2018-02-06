import React, { Component } from 'react';

import '../App.css';
import horari from '../assets/fotos/horario.jpg'

export default class Horari extends Component {

  render() {
    return (
      <div className="horari__wrapper">
        <div className="horari__ImageWrapper">
          <img className="horari__image" src={horari}></img>
        </div>
        <div className="schedule__wrapper">
          <span className="schedule__text">Laura i Adri</span>
          <ul className="schedule__list">
            <li>17:30 - Arribada a l'esglesia</li>
            <li>18:00 - Cerèmonia</li>
            <li>19:30 - Aperitiu</li>
            <li>21:00 - Sopar</li>
            <li>23:00 - Ball</li>
            <li>04:00 - Fi de festa</li>
          </ul>
        </div>
        <div>
        </div>
      </div>
    );
  }
}
