import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './_slideshow.scss'
import ring from './img/best-seller-ring.jpg'
import beyond from './img/best-sellers-img.jpg'
import tropicana from './img/best-sellers-img2.jpg'

const slideImages = [
    {
        url: ring,
        caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Eligendi in error quaerat facere molestias delectus corrupti ex ab asperiores exercitationem.error quaerat facere molestias delectus corrupti ex ab asperiores exercitationem.',
        title: "Little fragile | $65"
    },
    {
        url: beyond,
        caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Eligendi in error quaerat facere molestias delectus corrupti ex ab asperiores exercitationem.error quaerat facere molestias delectus corrupti ex ab asperiores exercitationem.',
        title: "Beyond Love | $60"
    },
    {
        url: tropicana,
        caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Eligendi in error quaerat facere molestias delectus corrupti ex ab asperiores exercitationem.error quaerat facere molestias delectus corrupti ex ab asperiores exercitationem.',
        title: "Tropicana | 70$"
    },
];

const SlideShow = () => {
    return (
        <div className="slide-container">
            <div className="title">
                <h1>Best Sellers</h1>
                <p>Products that customers love the most in recent years</p>
            </div>
            <Slide>
                {slideImages.map((slideImage, index) => (
                    <div className='best-sellers' key={index}>
                        <div className='spanStyle'>
                            <h2>{slideImage.title} </h2>
                            <span className='caption'>{slideImage.caption}</span>
                        </div>
                        <div><img className='images' src={slideImage.url} alt="" /></div>
                    </div>
                ))}
            </Slide>
        </div>
    )
}

export default SlideShow