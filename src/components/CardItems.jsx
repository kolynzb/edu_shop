import React from "react";
import Card from "./Card";
import { data } from "../Assets/Library/stock";
import "./styles/CardItems.css";

function CardItems() {
  return (
    <div className="cardItems">
      <div className="categori">
        {data
          .filter((stock) => stock.category === "Phones and Tablets")
          .map((stock) => (
            <Card
              image={stock.image}
              price={stock.price}
              key={stock.id}
              name={stock.product}
              stars={stock.star}
              stock={stock}
            />
          ))}
      </div>
      <h1>Electronics</h1>
      <div className="categori">
        {data
          .filter((stock) => stock.category === "Electronics")
          .map((stock) => (
            <div key={stock.id}>
              <Card
                image={stock.image}
                price={stock.price}
                name={stock.product}
                stars={stock.star}
                stock={stock}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default CardItems;
