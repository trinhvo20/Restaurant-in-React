import "./Main.css";
import { useState } from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import Footer from "./Footer";
import Menu from "./Menu";
import Cart from "./Cart";

const Main = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    const productExists = cartItems.find((item) => item.id === product.id);
    if (productExists) {
      setCartItems(cartItems.map(item => item.id === product.id ?
        { ...productExists, quantity: productExists.quantity + 1 } : item)
      )
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }])
    }
  }

  const handleRemoveFromCart = (product) => {
    const productExists = cartItems.find((item) => item.id === product.id);
    if (productExists.quantity === 1) {
      setCartItems(cartItems.filter(item => item.id !== product.id))
    } else {
      setCartItems(cartItems.map(item => item.id === product.id ?
        { ...productExists, quantity: productExists.quantity - 1 } : item)
      )
    }
  }

  const handleClearCart = () => {
    setCartItems([]);
  }

  return (
    <div>
      <div class="main">
        <Header />
        <Menu handleAddToCart={handleAddToCart} />
        <Footer />
        <Cart
          trigger={buttonPopup}
          setTrigger={setButtonPopup}
          cartItems={cartItems}
          handleAddToCart={handleAddToCart}
          handleRemoveFromCart={handleRemoveFromCart}
          handleClearCart={handleClearCart} />
      </div>
      <NavBar setButtonPopup={setButtonPopup} />
    </div>
  );
}

export default Main;