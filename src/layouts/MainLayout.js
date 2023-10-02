import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import "./_mainLayout.scss"


export function MainLayout() {
    return (
        <>
            <div className='main-nav'>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/register">Register</Link>
                    <Link to="/shop">Shop</Link>
                    <Link to="/basket">Basket</Link>
                </nav>
            </div>
            <main>
                <Outlet />
            </main>
        </>

    )
}

