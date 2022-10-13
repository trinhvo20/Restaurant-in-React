import "./NavBar.css";
import { Link } from 'react-scroll';
import Cart from "./Cart";

const NavBar = () => {
  return (
    <div>
      <ul class="navbar">
        <li class="one">
          <Link activeClass="active" to="header" spy={true} smooth={true} offset={-40} duration={500}>
            <span class="icon">Home</span>
          </Link>
        </li>
        <li class="two">
          <Link activeClass="active" to="menu" spy={true} smooth={true} offset={-20} duration={500}>
            <span class="icon">Menu</span>
          </Link>
        </li>
        <li class="three">
          <a href="#">
            <span class="icon">Order</span>
          </a>
        </li>
        <li class="four">
          <Link activeClass="active" to="footer" spy={true} smooth={true} offset={-20} duration={500}>
            <span class="icon">History</span>
          </Link>
        </li>
      </ul>

      <div>
        <span class="cart-icon">
          <i class="ri-shopping-cart-2-line"></i>
          <span className="badge">0</span>
        </span>
      </div>
    </div>
  );
};
export default NavBar;
