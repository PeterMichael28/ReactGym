import React from 'react'

import './Hero.css'
import HeroLeftSide from './HeroLeftSide';
import HeroRightSide from './HeroRightSide';



const Hero = () => {
  return (
    <div className='hero' id='hero'>
      <div className="blur hero-blur"></div>
          <HeroLeftSide />
         <HeroRightSide />
    </div>
  )
}

export default Hero