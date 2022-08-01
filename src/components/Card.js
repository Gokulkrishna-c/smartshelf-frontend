import React, { useState } from "react";
import axios from "axios";
import Image from "../assets/water.jpg";
import "./Card.css";
const Card = ({ name, price, indi, shelfNo }) => {
  const [Qty, setQty] = useState(0);
  const url = "https://smartshelf16.herokuapp.com/weight";
  const getQuantity = async () => {
    const qty = await axios.get(url);
    const num = Math.floor(qty.data / indi);
    console.log(num);
    console.log(qty);
    setQty(num);
  };
  setInterval(() => {
    getQuantity();
  }, 3000);
  return (
    <div className="card">
      {Qty <= 2 ? <p className="lowstock">Low Stock</p> : ""}
      <img src={Image} alt="bottle" />
      <div className="desc">
        <p>Shelf No: {shelfNo}</p>
        <div className="dec1">
          <p>Item : {name}</p>
          <p>Price : &#8377; {price}</p>
        </div>
        <p>Quantity:{Qty ? Qty : "Loading.."}</p>
      </div>
    </div>
  );
};

export default Card;
