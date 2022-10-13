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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit autem possimus sunt fugiat maiores ipsum quia impedit praesentium, blanditiis nam delectus, magni nisi vitae natus, deserunt ab magnam asperiores nemo numquam omnis. Recusandae iure corrupti consectetur ea fuga explicabo accusamus! Nam nisi rerum pariatur magni laboriosam iure officia, inventore voluptas laborum quam cumque sit. Possimus, dolore officiis non iste ipsam minima officia pariatur, saepe sequi accusamus blanditiis nobis magnam voluptas doloribus fugiat odit veniam sed omnis, modi deserunt. Est consectetur suscipit iste nam, voluptas quisquam esse maiores animi labore ratione, molestias velit! Voluptatem ex ipsa velit quam molestiae repudiandae perferendis labore consequuntur dolores commodi. Qui, veritatis doloribus! Expedita autem sint quam error nisi, suscipit ipsa voluptates eaque inventore officiis dolorum aperiam, neque tempore magni impedit. Tenetur, iusto ab provident repellat nesciunt explicabo nam aliquam deleniti. Quibusdam aliquam culpa perspiciatis ut sapiente nulla! Eaque dolor beatae ullam distinctio earum eum libero cupiditate ratione quidem voluptatum amet excepturi ipsum, aperiam unde rem ab nulla facere repudiandae laborum molestiae rerum? Nam nulla provident sunt totam adipisci quibusdam, natus voluptates commodi explicabo labore assumenda tempore facilis. Consequuntur et illo voluptas earum ipsum eos, delectus accusamus quam saepe dolor reiciendis obcaecati aliquid doloribus reprehenderit at.</p>
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
                            +1 (999) 123-4567
                        </p>
                    </div>
                    <div>
                        <p>
                            <span class="underline">HOURS</span> <br />
                            Mon-Sat: 10AM - 10PM <br />
                            Sunday: 12AM - 9PM
                        </p>
                        <p>
                            <span class="underline">MEDIA</span> <br />
                            facebook.com/viet_taste
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer