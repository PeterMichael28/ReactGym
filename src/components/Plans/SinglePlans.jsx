import React from 'react'
import tick from '../../assets/whiteTick.png'
import RightArrow from '../../assets/rightArrow.png'

const SinglePlans = ({data, key}) => {
  return (
      <div key={key} className='plans-data'>
          { data.icon }
          <span className='plans-data_name'>{ data.name }</span>
          <span className='plans-data_price'>$ { data.price }</span>
          <div className='plans-features'>{ data.features.map( (features, i) => {
              return <div key={i}>
                  <img src={ tick } alt="img" />
                  <span>{features}</span>
              </div>
          } ) }</div>
          <div className='see-more'>
              <span>See more benefits</span>
              <img src={ RightArrow } alt="arrow" />
          </div>
         
              <button className='btn'>Join now</button>
       
      </div>
  )
}

export default SinglePlans