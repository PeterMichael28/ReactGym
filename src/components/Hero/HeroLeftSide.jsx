import React from 'react'
import Header from '../Header/Header';
import { motion } from 'framer-motion'
import NumberCounter from 'number-counter'

const HeroLeftSide = () => {

  const mobile = window.innerWidth <= 768 ? true : false;

  const transition = {type:'spring', duration:3}
  return (
    <div className="left-side">
             <Header />
             
        
        {/*Hero best ads in town*/}
             <div className="the-best-ads">
              <motion.div
              initial={{left: mobile? '190px':'220px'}}
              whileInView={{left: '8px'}}
              transition={{...transition, type:'tween'}}
              ></motion.div>
              <span>the best fitness club in town</span>
             </div>
             
        
        {/*Hero Headings*/ }
        <div className='hero-text'>
          <div>
            <span className='outline-text'>Shape </span>
            <span>Your</span>
          </div>

          <div>
            <span>Ideal Body</span>
          </div>

          <div className='hero-text-small'>
            <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
          </div>
        </div>

        {/* Head Figures */ }
        <div className="figures">
          <div>
          <span><NumberCounter end={140} start={90} delay='4' preFix="+" /></span>
            <span>expert coaches</span>
          </div>
          <div>
            <span><NumberCounter end={970} start={910} delay='3' preFix="+" /></span>
            <span>members joined</span>
          </div>
          <div>
            <span><NumberCounter end={70} start={30} delay='3' preFix="+" /></span>
            <span>fitness programs</span>
          </div>
        </div>

        {/*hero buttons*/ }
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
          </div>
  )
}

export default HeroLeftSide