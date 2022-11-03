import React from 'react'
import "./Footer.css";
import logo from "../images/logo.png";

const Footer = () => {
    return (
        <div id='footer'>
            <div className="history">
                <h2>HISTORY</h2>
                <p>Viet’s Taste's history goes back to California since the 1980’s.
                    <br />Today, from generation to generation, the legacy of Viet's Taste continues.</p>

                <p>Viet’s Taste is built on a foundation of love, family, food, and a passion for hospitality.
                    It all started from a humble dream of two young restaurant servers, Thanh and Oanh (One).
                    Arriving to the U.S. by boat in the early 1980s, they met each other in 1986 while working in a Vietnamese restaurant.
                    They married soon after, with their love, passion, and aspirations to open up their own restaurant only growing stronger.</p>

                <p>They eventually realized their dreams, opening the doors to Viet’s Taste.
                    In their early years of running their own restaurant, Thanh and Oanh (One) were focused on developing the best recipes, doing careful research to make sure every dish offered the most authentic Vietnamese experience outside of Vietnam.
                    At the same time, they were also focused on putting together the right team to provide the best service and experience for their guests.</p>

                <p>A tireless dedication to these dreams and an unwavering drive to share their love through their cuisine has made Viet’s Taste the extraordinary establishment that it is today.
                    Now, with three decades of restaurant experience under their belts, Thanh and Oanh (One) are honored to provide guests with highly appetizing dishes, excellent service, and an overall delightful experience.</p>

                <p>Today, Viet’s Taste is proud to celebrate, honor, and carry on the dream that inspired its humble beginnings.
                    <br />We invite you to be part of our dream and experience our passion through our unique, delicious, amazing cuisine!</p>
            </div>
            <footer>
                <h2>CONTACT US</h2>
                <img src={logo} class="logo" />
                <div class="info">
                    <div>
                        <p>
                            <span class="underline">ADDRESS</span>
                            <br />
                            5280 Clinton Rd <br />
                            Ruston, LA 71270
                        </p>
                        <p>
                            <span class="underline">PHONE</span> <br />
                            <i class="ri-phone-line"></i> +1 (999) 123-4567
                        </p>
                    </div>
                    <div>
                        <p>
                            <span class="underline">HOURS</span> <br />
                            Mon-Sat: 10AM - 10PM <br />
                            Sunday: 12AM - 9PM
                        </p>
                        <p>
                            <span class="underline">SOCIAL MEDIA</span> <br />
                            <i class="ri-facebook-fill"></i> facebook.com/viet_taste
                        </p>
                    </div>
                </div>
            </footer>
        </div >
    )
}

export default Footer