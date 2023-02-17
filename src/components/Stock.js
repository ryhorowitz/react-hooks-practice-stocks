import React from "react";

function Stock({ stock, onStockClick }) {
  const { name, ticker, price, type } = stock

  function handleClick() {
    onStockClick(stock)
  }

  return (
    <div>
      <div className="card">
        <div className="card-body" onClick={handleClick}>
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{`${ticker}: ${price}`}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
