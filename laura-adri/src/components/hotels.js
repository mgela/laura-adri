
import React, { Component } from 'react';
import Slider from 'react-slick'
// var Slider = require('react-slick');


import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';




import '../App.css';
//hotel images
// import morvedra from '../assets/fotos/hotels/morvedra/morve.jpg'
// import morvedra2 from '../assets/fotos/hotels/morvedra/morve2.jpeg'
// import morvedra3 from '../assets/fotos/hotels/morvedra/morve3.jpg'

import morvedraThumb from '../assets/fotos/hotels/morvedra/morvethu.jpg'
import morvedraThumb2 from '../assets/fotos/hotels/morvedra/morvethum.jpg'
import morvedraThumb3 from '../assets/fotos/hotels/morvedra/morvethumb3.jpg'

import faustino from '../assets/fotos/hotels/faustino/faustino.jpg'
import faustino2 from '../assets/fotos/hotels/faustino/faustino2.jpg'
import faustino3 from '../assets/fotos/hotels/faustino/faustino3.jpg'
import faustino4 from '../assets/fotos/hotels/faustino/faustino4.jpg'

import casas from '../assets/fotos/hotels/casas/casas.jpg'
import casas2 from '../assets/fotos/hotels/casas/casas2.jpg'
import casas3 from '../assets/fotos/hotels/casas/casas3.jpg'

export default class Fotos extends Component {


  render() {
    const settings = {
     dots: false,
     infinite: true,
     // arrows: false,
     autoplay:false,
     autplaySpeed: 3000,
     speed: 500,
     slidesToShow: 1,
     slidesToScroll: 1,
     className: 'slick',
     adaptiveSlide: true,
   }

    return (

      <div className="hotels__wrapper">

        <div className='hotel__1'>
          <Slider {...settings}>
            <div className="slick_holder"><img className="holder_picture"src={morvedraThumb}/></div>
            <div className="slick_holder"><img className="holder_picture"src={morvedraThumb2}/></div>
            <div className="slick_holder"><img className="holder_picture"src={morvedraThumb3}/></div>
          </Slider>
          <h3>Morvedra Nou</h3>
          <p>Camí de Macarella Km 7</p>
          <p>07760 Ciutadella de Menorca</p>
        </div>
        <div className='hotel__2'>
          <Slider {...settings}>
            <div className="slick_holder"><img className="holder_picture"src={faustino3}/></div>
            <div className="slick_holder"><img className="holder_picture"src={faustino}/></div>
            <div className="slick_holder"><img className="holder_picture"src={faustino2}/></div>
            <div className="slick_holder"><img className="holder_picture"src={faustino4}/></div>
          </Slider>
          <h3>Hotel Faustino</h3>
        </div>
        <div className='hotel__3'>
          <Slider {...settings}>
            <div className="slick_holder"><img className="holder_picture"src={casas}/></div>
            <div className="slick_holder"><img className="holder_picture"src={casas2}/></div>
            <div className="slick_holder"><img className="holder_picture"src={casas3}/></div>
          </Slider>
          <h3>Casas del Lago</h3>
        </div>
        <div className='hotel__4'>
          <Slider {...settings}>
            <div className="slick_holder"><img className="holder_picture"src={faustino}/></div>
            <div className="slick_holder"><img className="holder_picture"src={faustino2}/></div>
            <div className="slick_holder"><img className="holder_picture"src={faustino3}/></div>
            <div className="slick_holder"><img className="holder_picture"src={faustino4}/></div>
          </Slider>
        </div>
        <div className='hotel__5'>
          <Slider {...settings}>
            <div className="slick_holder"><img className="holder_picture"src={faustino}/></div>
            <div className="slick_holder"><img className="holder_picture"src={faustino2}/></div>
            <div className="slick_holder"><img className="holder_picture"src={faustino3}/></div>
            <div className="slick_holder"><img className="holder_picture"src={faustino4}/></div>
          </Slider>
        </div>
        <div className='hotel__6'>
          <Slider {...settings}>

          </Slider>
        </div>
      </div>
    );
  }
}
