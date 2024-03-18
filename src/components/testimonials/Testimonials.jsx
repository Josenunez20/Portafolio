import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar5.jpg'
import AVTR2 from '../../assets/avatar6.jpg'
import AVTR3 from '../../assets/avatar7.jpg'
import AVTR4 from '../../assets/avatar8.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data =[
  {
    avatar: AVTR1,
    name: 'Alex Pargas',
    review: 'Demuestras una gran capacidad para escuchar y considerar las ideas de los demás en el trabajo en equipo, lo cual es fundamental para el éxito conjunto'
  },
  {
    avatar: AVTR2,
    name: 'Orian Hernandez',
    review: 'Tu disposición para colaborar es clave para la ayuda en la resolución de problemas. Bueno para trabajar en equipo.'
  },
  {
    avatar: AVTR3,
    name: 'Jeremy Benitez',
    review: 'He notado que tu habilidad para comunicarte de manera clara y efectiva ha contribuido significativamente a la cohesión del equipo.'
  },
  {
    avatar: AVTR4,
    name: 'Newman Sanchez',
    review: 'Su compromiso con los objetivos del equipo y su voluntad de apoyar a tus compañeros demuestran un alto nivel de profesionalismo y compañerismo.'
  },
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        // install Swiper modules
        modules={[ Pagination]}
        spaceBetween={40}
        slidesPerView={1}        
        pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name, review}, index) =>  {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials