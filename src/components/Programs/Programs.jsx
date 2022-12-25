import React from 'react'
import './Programs.css'

import {programsData} from '../../data/programsData'
import SinglePrograms from './SinglePrograms';


const Programs = () => {
  return (
      <div id="programs" className='programs'>
          <div className="programs-headers">
              <span className='outline-text'>Explore</span>
              <span>Programs</span>
              <span className='outline-text'>to shape you</span>
          </div>

          <div className="programs-categories">
              { programsData.map( ( data, i ) => {
                 return <SinglePrograms data={data} keys={i} />
              })}
          </div>
          
    </div>
  )
}

export default Programs