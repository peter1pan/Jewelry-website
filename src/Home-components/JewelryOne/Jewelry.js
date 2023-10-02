import React from 'react'
import './_jewelry.scss'
import imageOne from './img/Bracelets.jpg'
import imageTwo from './img/Necklaces.jpg'
import imageThree from './img/earrings.jpg'
function Jewelry() {
    return (
        <div className='image-container'>
            <img className='images' src={imageThree} alt="" />
            <img className='images' src={imageOne} alt="" />
            <img className='images' src={imageTwo} alt="" />
            <img className='images' src={imageThree} alt="" />
        </div>
    )
}

export default Jewelry