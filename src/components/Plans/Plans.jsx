import React from 'react'
import './Plans.css'
import {plansData} from '../../data/plansData'
import SinglePlans from './SinglePlans';

const Plans = () => {
  return (
      <div id='plans' className='plans'>
          <div className="blur plans-blur-1"></div>
          <div className="blur plans-blur-2"></div>
          <div className='plans-headers'>
              <span className='outline-text'>Ready to start</span>
              <span>your journey</span>
              <span className='outline-text'>now with us</span>
          </div>
          <div className='plans-cards'>
              { plansData.map( ( data, i ) => {
                  return <SinglePlans data={data} key={i} />
              })}
          </div>
    </div>
  )
}

export default Plans