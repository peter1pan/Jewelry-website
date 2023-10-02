import React, { useEffect, useContext } from 'react'
import ring from './img/Ring.jpg'
import './_jeweldetails.scss'
import ProductContext from '../context/ProductsContext'

const JewelDetails = ({ jewel }) => {
    const context = useContext(ProductContext)
    useEffect(() => {
    }, [context.selectedProducts])

    return (
        <>
            <section className='jewel-details-section'>
                <div className='jewel-details-image'>
                    <img src={ring} alt='' className='details-image' />
                    <button onClick={() => context.selectProduct(jewel)} className='add-to-basket'>Add to Basket</button>
                    {context.sepeteEklendi && (<div className='added-to-basket-div'><i className="fa-sharp fa-solid fa-check fa-bounce"></i>Added to Cart</div>)}
                </div>
                <div className='jewel-details-div'>
                    <h1>{jewel.title}</h1>
                    <span className='details-price'>{jewel.price}₺</span>
                </div>

            </section>
        </>
    )
}

export default JewelDetails