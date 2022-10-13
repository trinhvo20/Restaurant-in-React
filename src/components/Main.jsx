import "./Main.css";
import NavBar from "./NavBar";
import Header from "./Header";
import Footer from "./Footer";
import Menu from "./Menu";
import Cart from "./Cart";

const Main = () => {
  return (
    <div>
      <div class="main">
        <Header />
        <Menu />
        <Footer />
      </div>
      <NavBar />
    </div>
  );
}

export default Main;