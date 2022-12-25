import React from 'react'
import heroImg from '../../assets/hero_image.png'
import heroImgBack from '../../assets/hero_image_back.png'
import Hearts from '../../assets/heart.png'
import Calories from '../../assets/calories.png'
import {motion} from 'framer-motion'


const HeroRightSide = () => {


  const mobile = window.innerWidth <= 768 ? true : false;
    
  const transition = {type:'tween', duration:3}
  return (
      <div className='right-side'>
        <button className="btn">Join Now</button>

            {/* Heart Rate */}
      <motion.div className='hearts'
        initial={ { x: 120 } }
        whileInView={ { x: 0 } }
        transition={transition}
      >
        <img src={Hearts} alt="" />
        <span>Heart Rate</span>
        <span>116 bpms</span>
   </motion.div>

      {/*Hero Images */ }
      <img src={heroImg} alt="img" />
      <motion.img
        initial={ { x:100 } }
        whileInView={ { x:0 } }
        transition={{...transition, type:'spring'}}
        src={ heroImgBack } alt="img" />
      
      {/* Calories  */ }
      <motion.div className="calories"
        initial={ { x: mobile? 200: 650 } }
        whileInView={ { x: mobile? 0: 130 } }
        transition={transition}
      
      
      >
        <img src={ Calories }  alt="img" />
        <div>
          <span>Calories</span>
          <span>320 cal</span>
        </div>
      </motion.div>
    </div>
  )
}

export default HeroRightSide; 