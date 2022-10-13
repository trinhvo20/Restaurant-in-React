import React from 'react'
import "./Cart.css"

const Cart = (props) => {
    return (props.trigger) ? (
        <div className='cart'>
            <div className="inner-cart">
                <span className="close-btn">
                    <i class="ri-close-line"></i>
                </span>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default Cart