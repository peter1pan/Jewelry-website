import React from 'react'
import './_register.scss'
import logo from '../img/logo.png'

function Form() {
    return (
        <div className="form-container">
           
            <div className="register-logo-image">
                <img src={logo} alt="" />
            </div>

            <div className="register-floor">
                <form id="form" novalidate>
                    <div className="form-group">
                        <label for="username">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            placeholder="Enter username"
                        />
                        <div></div>
                    </div>
                    <div className="form-group">
                        <label for="email">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter Email"
                        />
                        <div></div>
                    </div>
                    <div className="form-group">
                        <label for="password">Password</label>
                        <input
                            minlength="6"
                            required
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Enter password"
                        />
                        <div></div>
                    </div>
                    <div className="register-submit-button">
                        <button type="submit" className="sign-in-button">Sign in</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form