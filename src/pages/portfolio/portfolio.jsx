import React from 'react'
import { portfolio } from '../../data'
import Portfolioitem from '../../components/Portfolio_item'
import './portfolio.css'



const Portfolio = () => {

  

  return (
  <section className="portfolio section">
    <h2 className="section_title">
      My <span>Portfolio</span>
    </h2>

    <div className="portfolio_container container grid">
    {portfolio.map((item) => {
      return <Portfolioitem key={item.id} {...item}/>;
    })}
    </div>
  </section>
  )
}

export default Portfolio