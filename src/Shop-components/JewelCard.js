import React from 'react';
import ring from "./img/Ring.jpg"
import { Link } from 'react-router-dom';

const jewelCard = ({ jewel }) => {
    return (
        <section className="container">
            <section className="card-body">
                <img src={ring} alt="" className="card-img-top" />
                <p className='prev-price'>{jewel.prevPrice}₺</p>
                <p className='price'>{jewel.price}₺</p>
                <h3 className='card-title'>{jewel.title}</h3>
                <Link  className='link-to' to={`/shop/${jewel.id}`}>Details</Link>
            </section>
        </section>
    );
}

export default jewelCard;

