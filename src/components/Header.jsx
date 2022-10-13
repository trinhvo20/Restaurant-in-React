import React from 'react'
import "./Header.css";
import pho from "../images/pho.jpg";

const Header = () => {
    return (
        <div id='header' className='header'>
            <div class="head_container">
                <div class="head">
                    <h1>
                        <span class="name">Viet's Taste</span>
                        <span class="cuisine"> | Vietnamese Cuisine</span>
                    </h1>
                </div>
                <div class="img_container">
                    <img src={pho} class="pho_img" />
                    <div class="sologan">
                        <h1>Viet's Taste</h1>
                        <h2>True Taste of Vietnam</h2>
                    </div>
                </div>
            </div>
            <p class="intro">
                Vietnamese meals feature a combination of five fundamental tastes:
                sweet, salty, bitter, sour, and spicy. Traditional Vietnamese
                cooking has often been characterised as using fresh ingredients and
                always naturally gluten-free, as many of the dishes are rice-based
                instead of wheat-based, made with rice noodles, papers and flour.
            </p>
        </div>
    )
}

export default Header