import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([])
  const [portfolio, setPortfolio] = useState([])
  const [sortBy, setSortBy] = useState('Alphabetically')
  const [filterBy, setFilterBy] = useState('Tech')

  useEffect(() => {
    fetch(`http://localhost:3001/stocks`)
      .then(r => r.json())
      .then(stocks => setStocks(stocks))
      .catch(err => console.error('ERROR getting stocks', err))
  }, [])

  function handleBuyStockClick(stock) {
    setPortfolio([...portfolio, stock])
  }

  function handleSellStockClick(sellStock) {
    const updatedPortfolio = portfolio.filter(stock => stock.id !== sellStock.id)
    setPortfolio(updatedPortfolio)
  }

  const sortedStocks = stocks.sort((a, b) => {
    if (sortBy === 'Alphabetically') {
      if (a.name < b.name) return -1
      if (a.name > b.name) return 1
      return 0
    } else { //sort by price
      if (a.price < b.price) return -1
      if (a.price > b.price) return 1
      return 0
    }
  })

  const filteredDisplay = sortedStocks.filter( stock => stock.type === filterBy )

  return (
    <div>
      <SearchBar
        sortBy={sortBy}
        setSortBy={setSortBy}
        setFilterBy={setFilterBy} />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={filteredDisplay} onBuyStockClick={handleBuyStockClick} />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} onSellStockClick={handleSellStockClick} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
