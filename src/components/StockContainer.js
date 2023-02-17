import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, onBuyStockClick }) {

  const displayStocks = stocks.map( stock => {
    const { id } = stock
    return <Stock key={id} stock={stock} onStockClick={onBuyStockClick}/>
  })

  return (
    <div>
      <h2>Stocks</h2>
      {displayStocks}
    </div>
  );
}

export default StockContainer;
