import React, {useState} from 'react'
import './Testimonials.css'
import { testimonialsData } from '../../data/testimonialsData'
import RightArrow from '../../assets/rightArrow.png'
import LefttArrow from '../../assets/leftArrow.png'
import { motion } from 'framer-motion'
const Testimonials = () => {
    const [selected, setSelected] = useState(0)
  const testL = testimonialsData.length
  const transition = {type: 'spring', duration: 3}
  


  const handleLeft = () => {
    selected === 0 ? setSelected( testL - 1 ) : setSelected( ( pre ) => pre - 1 )
  }

  const handleRight = () => {

    selected === (testL - 1) ? setSelected(0) : setSelected((pre) => pre + 1)
  }
  return (
      <div id='testimonials' className='testimonials'>
          <div className="tes-l">
              <span>Testimonials</span>
              <span className='outline-text'>What they</span>
              <span>say about us</span>
              <motion.span 
                key={ selected }
                initial={ { opacity: 0, x: -100 } }
                whileInView={ { opacity: 1, x: 0 } }
                exit={ { opacity: 0, x: 100 } }
                transition={ { ...transition, duration: 4 } }
              >{ testimonialsData[selected ].review }</motion.span>
              <span>
              <span style={{color: 'var(--orange)'}}>{ testimonialsData[ selected ].name } </span>
              <span>- { testimonialsData[ selected ].status}</span>
                
              </span>
          </div>
      <div className="tes-r">
        <motion.div
          initial={ { opacity: 0, x: -100 } }
          whileInView={ { opacity: 1, x: 0 } }
          transition={transition}
        ></motion.div>
        <motion.div
          initial={ { opacity: 0, x: 100 } }
          whileInView={ { opacity: 1, x: 0 } }
          transition={transition}
        ></motion.div>
        <motion.img
          key={ selected }
           initial={ { opacity: 0, x: 100 } }
          whileInView={ { opacity: 1, x: 0 } }
          exit={{opacity: 0, x: -100}}
           transition={{...transition, duration: 4}}
          src={ testimonialsData[ selected ].image } alt='img' />
          <div className='arrows'>
            <img onClick={handleLeft} src={LefttArrow} alt="" />
            <img onClick={handleRight} src={RightArrow} alt="" />
          </div>
          </div>
    </div>
  )
}

export default Testimonials