import React from 'react'
import "./Cart.css"

const Cart = (props) => {
    const trigger = props.trigger;
    const cartItems = props.cartItems;

    const totalPrice = cartItems.reduce((price, item) => price + item.quantity * item.price, 0);

    return (trigger) ? (
        <div className='cart'>
            <div className="inner-cart">
                <span className="close-btn" onClick={() => props.setTrigger(false)}>
                    <i class="ri-close-line"></i>
                </span>

                <div className="cart-items">
                    <h2 className="cart-items-header">My Cart</h2>

                    {props.succeed && (<div className='succeed'>Order Placed! <br /><i class="ri-check-line"></i></div>)}

                    {cartItems.length === 0 && (<div className='cart-items-empty'>Your Cart is empty.</div>)}

                    <div>
                        {cartItems.map(item => (
                            <div key={item.id} className="cart-items-list">
                                <img className='cart-items-img' src={item.imgUrl} alt={item.title} />
                                <div className="cart-items-info">
                                    <div className='cart-items-name'>{item.title}</div>

                                    <div className="cart-items-price">${item.price}</div>

                                    <div className="cart-item-function">
                                        <span className="cart-items-remove" onClick={() => props.handleRemoveFromCart(item)}>
                                            <i class="ri-subtract-line"></i>
                                        </span>
                                        <span className='cart-items-quantity'>{item.quantity}</span>
                                        <span className="cart-items-add" onClick={() => props.handleAddToCart(item)}>
                                            <i class="ri-add-line"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="cart-items-total-price-title">
                        Total Price:
                        <span className="cart-items-total-price">${totalPrice}</span>
                    </div>


                    <div className="clear-cart">
                        {cartItems.length >= 1 && (
                            <div className='buttons-groups'>
                                <button className='clear-cart-btn' onClick={props.handleClearCart}>Empty Cart</button>
                                <button className='checkout-btn' onClick={props.handleCheckout}> Proceed to Checkout</button>
                            </div>)}

                    </div>
                </div>
            </div>
        </div>
    ) : "";
}

export default Cart
