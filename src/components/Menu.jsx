import React, { useState, useEffect } from 'react';
import "./Menu.css";
import { Container, Row, Col } from "reactstrap";
import { Appetizers, MainDishes, Drinks } from '../assets/foods'
import SingleProduct from "./SingleProduct";

const Menu = () => {
  const [filter, setFilter] = useState('APPERTIZERS')
  const [products, setProducts] = useState(Appetizers)

  useEffect(() => {
    if (filter === 'APPERTIZERS') {
      setProducts(Appetizers)
    }
    if (filter === 'MAINDISHES') {
      setProducts(MainDishes)
    }
    if (filter === 'DRINKS') {
      setProducts(Drinks)
    }
  }, [filter])

  return (
    <div className="menu" id="menu">
      <section className="pt-0">
        <Container>
          <Row className="row">
            <Col lg='12'><h2>MENU</h2></Col>
            <Col lg="12" className="menu-btn">
              <button className={`btn ${filter === 'APPERTIZERS' ? 'active-btn' : ''}`} onClick={() => setFilter('APPERTIZERS')}>Appertizers</button>
              <button className={`btn ${filter === 'MAINDISHES' ? 'active-btn' : ''}`} onClick={() => setFilter('MAINDISHES')}>Main Dishes</button>
              <button className={`btn ${filter === 'DRINKS' ? 'active-btn' : ''}`} onClick={() => setFilter('DRINKS')}>Drinks</button>
            </Col>
            {
              products.map(item => (
                <Col lg="3" key={item.id} className="mb-3">
                  <SingleProduct item={item} />
                </Col>
              ))
            }
          </Row>


        </Container>
      </section>
    </div>
  );
};

export default Menu;
