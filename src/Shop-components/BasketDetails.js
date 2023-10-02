import React, { useContext } from 'react'
import "../Shop-components/_basket.scss"
import ProductContext from '../context/ProductsContext'
import { Link } from 'react-router-dom'

const BasketDetails = () => {
    const context = useContext(ProductContext);

    const totalBasketPrice = context.selectedProducts.reduce((total, item) => {
        return total + item.totalPrice;
    }, 0);

    return (
        <>
            {
                (context.selectedProducts.length === 0) ?
                    <div className='empty-div'>
                        <span>Your shopping cart is empty, start shopping now </span>
                        <Link className='empty-go-shop' to="/shop">Shop</Link>
                    </div>
                    :
                    <>
                        {
                            context.selectedProducts.map((item) =>
                                <div className='main-basket-div' key={item.product.id}>
                                    <section className='basket-details-section' key={item.product.id}>
                                        <p>{item.product.title} </p>
                                        <span>{item.totalPrice}₺</span>
                                        <div className='item-count-div'>
                                            <button onClick={() => context.handleDecrease(item)}>-</button>
                                            <span className='item-count-span'> {item.count} </span>
                                            <button onClick={() => context.handleIncrease(item)}>+</button>
                                        </div>
                                        <button className='basket-delete-button' onClick={() => context.deleteProduct(item.product)}>X</button>
                                    </section>
                                </div>
                            )
                        }
                        <div className='total-price-div'>
                            Total Price : {totalBasketPrice}₺
                        </div>

                    </>
            }
        </>
    )
}

export default BasketDetails