
import React, { Component } from 'react';
import Slider from 'react-slick'
// var Slider = require('react-slick');


import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';




import '../App.css';
//hotel images
import morvedra from '../assets/fotos/hotels/morvedra/morve.jpg'
import morvedra2 from '../assets/fotos/hotels/morvedra/morve2.jpeg'
import morvedra3 from '../assets/fotos/hotels/morvedra/morve3.jpg'

import morvedraThumb from '../assets/fotos/hotels/morvedra/morvethu.jpg'
import morvedraThumb2 from '../assets/fotos/hotels/morvedra/morvethum.jpg'
import morvedraThumb3 from '../assets/fotos/hotels/morvedra/morvethumb3.jpg'


export default class Fotos extends Component {


  render() {
    const settings = {
     dots: false,
     infinite: true,
     // arrows: false,
     autoplay:true,
     autplaySpeed: 3000,
     speed: 500,
     slidesToShow: 1,
     slidesToScroll: 1,
     className: 'slick',
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
        </div>
        <div className='hotel__2'>

        </div>
        <div className='hotel__3'>

        </div>
        <div className='hotel__4'>

        </div>
        <div className='hotel__5'>

        </div>
        <div className='hotel__6'>

        </div>
      </div>
    );
  }
}
