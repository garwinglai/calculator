import React, { useEffect, useState } from 'react'
import './css/Numbers.css'

function Numbers() {
  const [numbers, setNumbers] = useState([])


  useEffect(() => {
    loadNumbers();
  }, [])

  function loadNumbers() {
    console.log('loaded')
  }


  function logNum() {
    console.log(numbers)
  }


  return (
    <div>
      This is the numbers section
      <button onClick={logNum}>button</button>
    </div>
  )
}

export default Numbers
