import React from 'react'
import './portafolio.css'
import IMG1 from '../../assets/portafolio1.png'
import IMG2 from '../../assets/portafolio2.png'
import IMG3 from '../../assets/portafolio3.png'
import IMG4 from '../../assets/portafolio4.png'
import IMG5 from '../../assets/portafolio5.png'
import IMG6 from '../../assets/portafolio6.png'

const data =[
  {
    id: 1,
    image: IMG1,
    title:'Sistema de Participacion Electoral',
  },
  {
    id: 2,
    image: IMG2,
    title:'Biblioteca Digital - Bolivar va a tu Escuela',
  },
  {
    id: 3,
    image: IMG3,
    title:'Pagina web (Proyecto Unexca)', 
  },
  {
    id: 4,
    image: IMG4,
    title:'Proyecto web (Website Unexca)', 
  },
  {
    id: 5,
    image: IMG5,
    title:'Proyecto web (Galeria - Website Unexca)',
  },
  {
    id: 5,
    image: IMG6,
    title:'Insertar Sigueinte Proyecto',
  }
]


const Portafolio = () => {
  return (
    <section id='portafolio'>
      <h5>My Recent Work</h5>
      <h2>Portafolio</h2>

      <div className="container portafolio__container">
        {
          data.map(({id, image, title, github, demo}) =>{
            return(
              <article key={id} className="portafolio__item">
                <div className="portafolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                {/* <div className="portafolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                  </div>*/}
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portafolio