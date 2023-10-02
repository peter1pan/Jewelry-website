import React from 'react'
import './_header.scss'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="about">
            <div className="dive-in">
                <h2>From "Jade", with love</h2>
                <div>
                    <p>Elegant, vibrant, and authentic jewelry to suit any occasion.</p>
                </div>
                <div><Link to="/shop">Shop</Link></div>
            </div>
        </div>
    )
}

export default Header