import React, { useState } from 'react'
import Close from '../assets/close.svg'

const Portfolioitem = ({img, title, details}) => {

    const [modal, setModal] = useState(false);

    const toogleModal = () => {
        setModal(!modal);
    };

  return (
   <div className="portfolio__item">
    <img src={img} alt="" className="portfolio_img" />

    <div className="portfolio_hover" onClick={toogleModal}>
        <h3 className="portfolio_title">
            {title}
        </h3>
    </div>

    {modal &&(
        <div className="portfolio_modal">
        <div className="portfolio_modal-content">
            <img src={Close} alt="" className="modal_close"  onClick={toogleModal}/>

            <h3 className="modal_title">{title}</h3>
            <ul className="modal_list grid">{details.map(({icon, title, desc}, index) => {
                return(
                    <li className="modal_item" key={index}>
                        <span className="item_icon">{icon}</span>
                        <div>
                            <span className="item_title">
                                {title}
                            </span>
                            <span className="item_details">
                                {desc}
                            </span>
                        </div>
                    </li>
                )
            })}</ul>

            <img src={img} alt="" className="modal_img" />
        </div>
    </div>
    )}
   </div>
   
  )
}

export default Portfolioitem