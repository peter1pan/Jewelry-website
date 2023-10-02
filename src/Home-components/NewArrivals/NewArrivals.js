import React from 'react'
import './_newarrivals.scss'
import image1 from './img/new-arrivals-1.jpg'
import image2 from './img/new-arrivals-2.jpg'
import image3 from './img/new-arrivals-3.jpg'
import image4 from './img/new-arrivals-4.jpg'
function NewArrivals() {
  return (
    <div className='new-arrivals'>
      <div className="title">
        <h1>New Arrivals</h1>
      </div>
      <div className='items'>
        <div><img src={image1} alt="" /></div>
        <div><img src={image2} alt="" /></div>
        <div><img src={image3} alt="" /></div>
        <div><img src={image4} alt="" /></div>
      </div>
    </div>
  )
}

export default NewArrivals