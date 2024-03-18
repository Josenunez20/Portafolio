import React from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiBook, BiMessageSquareDetail} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import { useState } from 'react'


const Nav = () => {
  const [activeNav, setActvieNav] = useState ('#');
  return (
    <nav>
      <a href="#" onClick={() => setActvieNav('#')} className={activeNav === '#' ? 'active' : '' }><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActvieNav('#about')} className={activeNav === '#about' ? 'active' : '' }><AiOutlineUser/></a>
      <a href="#experience" onClick={() => setActvieNav('#experience')} className={activeNav === '#experience' ? 'active' : '' }><BiBook/></a>
      <a href="#services" onClick={() => setActvieNav('#services')} className={activeNav === '#services' ? 'active' : '' }><RiServiceLine/></a>
      <a href="#contact" onClick={() => setActvieNav('#contact')} className={activeNav === '#contact' ? 'active' : '' }><BiMessageSquareDetail/></a>   
      
    </nav>
  )
}

export default Nav