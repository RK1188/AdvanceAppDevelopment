
import React, { useState, useEffect } from "react";
import "./PurchasingForm.css"; 
import NavBar from "./Navbar";

function Dealer() {
  const [restockedProductsItems, setRestockedProductsItems] = useState([]);

  const itemDetails = localStorage.getItem("restockedProducts");

  const [supplierName, setSupplierName] = useState("");
  const [date, setDate] = useState("");
  const [productPrice, setProductPrice] = useState("");
//   const [paymentOption, setPaymentOption] = useState("");

//   const handleOption = (e) => {
//     setPaymentOption(e.target.value);
//   };

  const parsedItems = JSON.parse(itemDetails);

  const handleSupplierNameChange = (e) => {
    setSupplierName(e.target.value);
  };
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };
  const handleProductPriceChange = (e) => {
    setProductPrice(e.target.value);
  };
  useEffect(() => {
    if (parsedItems) {
      setRestockedProductsItems(parsedItems);
    }
  });

  const handleClick = () => {
    localStorage.clear();   
    setRestockedProductsItems([]);
  };
  const handleCancel = () => {
    window.history.go(-1);
  };

  return (
    <div className="dealer-navba">
    <NavBar/>
    <div className="dealer-container">
    <h2>Restocked Products</h2>
    <div className="Dealer-container-input-container">
    <input
    type="text"
    name="supplierName"
    placeholder="Supplier Name"
    value={supplierName}
    onChange={handleSupplierNameChange}
    />
    <input
    type="date"
          name="supplierName"
          placeholder="date"
          value={date}
          onChange={handleDateChange}
          style={{ marginRight: "9px" }}
          />
          <input
          type="text"
          name="productPrice"
          placeholder="Enter productPrice"
          value={productPrice}
          onChange={handleProductPriceChange}
          />
          </div>
          <table className="dealer-table">
          <thead>
          <tr>
          <th style={{color:"black"}}>Product Name</th>
            <th style={{color:"black"}}>Quantity Restocked</th>
            <th style={{color:"black"}}>Total Amount</th>
          </tr>
        </thead>
        <tbody>
        {restockedProductsItems.map((product, index) => (
            <tr key={index}>
            <td>{product.productName}</td>
            <td>{product.requiredQuantity}</td>
            <td>{product.productPrice}</td>
            </tr>
            ))}
            </tbody>
            </table>
            <div className="dealer-button">
            <button type="button" onClick={handleCancel}>cancel</button>
            <select onChange={handleClick} className="dealer-select">
            <option value="">Select Payment Option</option>
            <option value="upi">UPI</option>
            <option value="card">Card</option>
            </select>
      </div>
    </div>
    </div>
    );
}

export default Dealer;