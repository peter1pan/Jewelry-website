import React from 'react'
import './_confidence.scss'
function Confidence() {
    return (
        <div className="confidence">
            <div>
                <div className="delivery">
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="50"
                            height="50"
                            viewBox="0 0 32 32"
                        >
                            <path
                                d="M24 24.688c1.125 0 2-.875 2-2s-.875-2-2-2-2 .875-2 2 .875 2 2 2zm2-12h-3.313v3.313h5.938zm-18 12c1.125 0 2-.875 2-2s-.875-2-2-2-2 .875-2 2 .875 2 2 2zm18.688-14l4 5.313v6.688H28c0 2.188-1.813 4-4 4s-4-1.813-4-4h-8c0 2.188-1.813 4-4 4s-4-1.813-4-4H1.312V8.001c0-1.438 1.25-2.688 2.688-2.688h18.688v5.375h4z"
                            ></path>
                        </svg>
                    </div>
                </div>
                <h3>Delivery</h3>
                <p>Free and express delivery</p>
                <div className="divider"></div>
            </div>
            <div>
                <div className="delivery">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        viewBox="0 0 32 32"
                        className=""
                    >
                        <path
                            d="M25.313 9.313h2.688v8H7.751l4.813 4.813-1.875 1.875-8-8 8-8 1.875 1.875-4.813 4.813h17.563V9.314z"
                        ></path>
                    </svg>
                </div>
                <h3>Return</h3>
                <p>30 Days free item return</p>
                <div className="divider"></div>
            </div>
            <div>
                <div className="delivery">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        viewBox="0 0 32 32"
                    >
                        <path
                            d="M20 16c0-2.188-1.813-4-4-4V9.312c3.688 0 6.688 3 6.688 6.688H20zm5.313 0A9.257 9.257 0 0016 6.687V3.999c6.625 0 12 5.375 12 12h-2.688zm1.375 4.688c.75 0 1.313.563 1.313 1.313v4.688c0 .75-.563 1.313-1.313 1.313C14.188 28.002 4 17.814 4 5.314c0-.75.563-1.313 1.313-1.313h4.688c.75 0 1.313.563 1.313 1.313 0 1.688.25 3.25.75 4.75.125.438.063 1-.313 1.375l-2.938 2.938c1.938 3.813 5.063 6.875 8.813 8.813l2.938-2.938c.375-.375.938-.438 1.375-.313 1.5.5 3.063.75 4.75.75z"
                        ></path>
                    </svg>
                </div>
                <h3>Support</h3>
                <p>Get 24/7 support service</p>
                <div className="divider"></div>
            </div>
        </div>
    )
}

export default Confidence