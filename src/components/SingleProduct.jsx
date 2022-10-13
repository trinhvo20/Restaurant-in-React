import React from 'react'
import "./SingleProduct.css"

const SingleProduct = (props) => {
    const { title, imgUrl, price, info } = props.item;

    return (
        <div className="single-product">
            <div className="product-img">
                <img src={imgUrl} alt="" className="food-img" />
            </div>

            <div className="product-content">
                <h6>{title}</h6>
                <div className="d-flex align-items-center justify-content-between">
                    <span className="price d-flex align-items-center">Price: $<span>{price}</span></span>
                    <span className='shopping-icon'><i class="ri-shopping-cart-2-line"></i></span>
                </div>
                <p className='info'>{info}</p>
            </div>
        </div>
    )
}

export default SingleProduct