import React from 'react'
import "./Cart.css"

const Cart = (props) => {
    const trigger = props.trigger;
    const cartItems = props.cartItems;

    return (trigger) ? (
        <div className='cart'>
            <div className="inner-cart">
                <span className="close-btn" onClick={() => props.setTrigger(false)}>
                    <i class="ri-close-line"></i>
                </span>

                <div className="cart-items">
                    <div className="cart-item-header">My Cart</div>

                    {cartItems.length === 0 && (<div className='cart-items-empty'>Your Cart is empty.</div>)}

                    <div>
                        {cartItems.map(item => (
                            <div key={item.id} className="cart-items-list">
                                <img className='cart-items-img' src={item.imgUrl} alt={item.title} />
                                <div className='cart-items-name'>{item.title}</div>
                                <div className="cart-item-function">
                                    <span className="cart-items-add" onClick={() => props.handleAddToCart(item)}>
                                        <i class="ri-add-line"></i>
                                    </span>
                                    <span className="cart-items-remove" onClick={() => props.handleRemoveFromCart(item)}>
                                        <i class="ri-subtract-line"></i>
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    ) : "";
}

export default Cart