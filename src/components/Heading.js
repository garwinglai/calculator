import React from 'react'
import "./css/Heading.css"

function Heading() {
  return (
    <div className='heading__container'>
      <h1 className='left__details'>calc</h1>
      <div className='right__details'>

        <div className="right__title">
          <h6>Theme</h6>
        </div>
        <div className='scroll__details'>
          <div className='scroll__numbers'>
            <p>1</p>
            <p>2</p>
            <p>3</p>
          </div>
          <div className="slider__container">
            <input type="range" min='1' max='3' className='slider' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Heading
