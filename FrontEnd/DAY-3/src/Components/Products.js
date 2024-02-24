import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';
import './Products.css';
import Navbar from './Navbar';
import axios from 'axios';

const Products = () => {
  const [menProducts, setMenProducts] = useState([]);
  const [restockedProducts, setRestockedProducts] = useState([]);

  useEffect(() => {
    fetchMenProducts();
  }, []);

  const fetchMenProducts = () => {
    axios.get('http://127.0.0.1:8080/product')
      .then(response => {
        setMenProducts(response.data);
      })
      .catch(error => {
        console.log(error);
      });
    
  };
  const handleRestock = (item) => {
    const requiredQuantity =
      parseInt(menProducts.product_total_availability) -
      parseInt(menProducts.scurrent_product_availability);
    const restockedProduct = {
      productName:item.name,
      requiredQuantity: item.stock,
    };
    setRestockedProducts((prevProduct) => [...prevProduct, restockedProduct]);
    console.log(restockedProducts);
  };
  useEffect(() => {
    console.log(restockedProducts);
  }, [restockedProducts]);

  if (restockedProducts.length > 0) {
    localStorage.setItem(
      "restockedProducts",
      JSON.stringify(restockedProducts)
    );
  }
  

  return (
    <div>
      <Navbar  />
      <div className="menu">
      <h1 className="menuTitle">Products</h1>
      <Link to="/addproducts">
      <button className='popupClose' style={{marginLeft:"80rem",marginTop:"-60px"}} > Add Item</button>
      </Link>
        <div className="menuList">
          {menProducts.map((item, index) => (
            <div className="menuItem" key={index}>
              <div className="menuItemImg" style={{ backgroundImage: `url(data:image/jpeg;base64,${item.image})` }} />
              <div className='product-img-details'>
                <h2 className="menuItemName">{item.name}</h2>
                <p style={{ paddingTop:"5px",paddingBottom: "2 px",color:"black",fontSize:"1.2rem",fontWeight:"bold"}} className="stock">Quantity {item.stock} KG</p>
              </div>
              <p className="menuItemPrice">Price ₹{item.price}</p>
              <Link
                    onClick={() => handleRestock(item)}
                    className="product-container-btn"
                  >
                  <button className='popupClose' >Restock</button>
                  </Link>
                  <Link to={"/dealer"} className="product-container-btn">
                  <button className='popupClose' style={{marginLeft:"180px",marginBottom:"-40px"}}>
                    Enter
                    </button>
                  </Link>

                </div>
          ))}
        </div>
      </div>
     
    </div>
  );
};

export default Products;