import React from 'react'
import './Reasons.css'
import Image1 from '../../assets/image1.png'
import Image2 from '../../assets/image2.png'
import Image3 from '../../assets/image3.png'
import Image4 from '../../assets/image4.png'
import nb from '../../assets/nb.png'
import Adidas from '../../assets/adidas.png'
import Nike from '../../assets/nike.png'
import tick from '../../assets/tick.png'

const Reasons = () => {
  return (
      <div id='reasons' className='reasons'>
          <div className="left-s">
              <img src={Image1} alt="image1" />
              <img src={Image2} alt="image2" />
              <img src={Image3} alt="image3" />
              <img src={Image4} alt="image4" />
          </div>
          <div className="right-s">
              <span>some reasons</span>
              <div>
                  <span className='outline-text'>why </span>
                  <span>choose us</span>
              </div>

            <div className='details-r'>
              <div><img src={tick} alt="icon" /><span>OVER 140+ EXPERT COACHES</span></div>
              <div><img src={tick} alt="icon" /><span>TRAIN SMARTER AND FASTER THAN BEFORE</span></div>
              <div><img src={tick} alt="icon" /><span>1 FREE PROGRAM FOR NEW MEMBER</span></div>
              <div><img src={tick} alt="icon" /><span>RELIABLE PARTNERS</span></div>
              </div>
              
              <div className="partners">
                  <span>OUR PARTNERS</span>
                  <div>
                  <img src={nb} alt="" />
                  <img src={Adidas} alt="" />
                  <img src={Nike} alt="" />
                  </div>
              </div>
          </div>

    </div>
  )
}

export default Reasons