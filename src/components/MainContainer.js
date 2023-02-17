import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([])
  const [portfolio, setPortfolio] = useState([])

  useEffect( () => {
    fetch(`http://localhost:3001/stocks`)
    .then( r => r.json())
    .then( stocks => setStocks(stocks))
    .catch( err => console.error('ERROR getting stocks', err))
  }, [])

  function handleBuyStockClick(stock) {
    setPortfolio([...portfolio, stock])
  }

  function handleSellStockClick(sellStock) {
    const updatedPortfolio = portfolio.filter( stock => stock.id !== sellStock.id)
    setPortfolio(updatedPortfolio)
  }

  function handleSortingStocks(selectedRadio) {
    if (selectedRadio === 'Alphabetically') {
      //sort alpha
      const sortedAlphaBetically = stocks.sort((a,b) => {
        if (a.name < b.name) return -1
        if (a.name > b.name) return 1
        return 0
      })
      console.log('alpha sort', sortedAlphaBetically)
      setStocks(sortedAlphaBetically)
    } else {
      //sort by Price
      const sortedByPrice = stocks.sort((a,b) => {
        if (a.price < b.price) return -1
        if (a.price > b.price) return 1
        return 0
      })
      console.log('sorted by price', sortedByPrice)
      setStocks(sortedByPrice)
    }

  }
  return (
    <div>
      <SearchBar sortStocks={handleSortingStocks}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} onBuyStockClick={handleBuyStockClick}/>
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} onSellStockClick={handleSellStockClick}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
