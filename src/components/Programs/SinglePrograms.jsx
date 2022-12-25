import React from 'react'
import RightArrow from '../../assets/rightArrow.png'

const SinglePrograms = ({data, key}) => {
  return (
      <div className='category' key={key}>
          {data.image}
          <span>{ data.heading }</span>
          <span>{ data.details }</span>
          <div className='join-now'>
              <span>Join Now</span>
              <img src={RightArrow} alt="arrow" />
          </div>
    </div>
  )
}

export default SinglePrograms