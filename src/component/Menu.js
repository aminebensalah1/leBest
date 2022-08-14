import React from "react";
import { useState, useEffect } from "react";
import Commands from "./Commands";

const Menu = () => {
  const [products, setProducts] = useState([]);
  const [commands, setCommands] = useState([]);
  useEffect(() => {
    const productDb = JSON.parse(localStorage.getItem("products"));
    setProducts(productDb);
  }, []);
  console.log(products);
  return (
    <div>
      <h1>Menu</h1>
      {products.map((product, idx) => (
        <div key={idx}>
          <div
            type="button"
            onClick={() => setCommands([...commands, product.name])}
          >
            <li>{product.name}</li>
          </div>
        </div>
      ))}
      <Commands commands={commands} />
    </div>
  );
};

export default Menu;
