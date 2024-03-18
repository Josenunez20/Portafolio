import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Desarrollo Frontend</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Desarrollo Backend</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Manejo Basico de PostgreSQL</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Manejo Basico de SQL</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Manejo Basico de PHP</p>
            </li>
            {/* WEB DEVELOPMNET */}
          </ul>
        </article>
        
        <article className="service">
          <div className="service__head">
            <h3>Made Content</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Sistema de Participacion Electoral</p> 
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Bilbioteca Digital - Bolivar va a tu Escuela</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Pagina web (Proyecto Unexca)</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Proyecto web (Website Unexca)</p>
            </li>
            
            {/* END OF CONTENT CREATION */}
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services