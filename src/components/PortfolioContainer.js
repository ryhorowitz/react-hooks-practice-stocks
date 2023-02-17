import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolio, onSellStockClick }) {
  const displayPortfolio = portfolio.map( stock => {
    const { id } = stock
    return <Stock key={id} stock={stock} onStockClick={onSellStockClick}/>
  })

  if( portfolio.length === 0 ) {
    return (
      <div>
        <h2>My Portfolio</h2>
      </div>
    );

  }

  return (
    <div>
      <h2>My Portfolio</h2>
      {
        displayPortfolio
      }
    </div>
  );
}

export default PortfolioContainer;
