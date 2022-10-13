import "./Main.css";
import { useState } from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import Footer from "./Footer";
import Menu from "./Menu";
import Cart from "./Cart";

const Main = () => {
  const [buttonPopup, setButtonPopup] = useState(false)

  return (
    <div>
      <div class="main">
        <Header />
        <Menu />
        <Footer />
        <Cart trigger={buttonPopup} setTrigger={setButtonPopup}><h1>My Cart</h1></Cart>
      </div>
      <NavBar setButtonPopup={setButtonPopup} />
    </div>
  );
}

export default Main;