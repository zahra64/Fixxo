import React from 'react'
import { NavLink } from 'react-router-dom'
import TempImg from '../assets/images/imges.jpg'

const productCard = () => {
  return (
    <div className="col">
        <div className="card">
            <div className="card-img">
            <img src={TempImg} alt="" />
                    {/* <img src="assets/images/imges.jpg" alt="images" /> */}
                <div className="card-menu">
                    <button className="menu-link"><i className="fa-regular fa-heart"></i></button>
                    <button className="menu-link"><i className="fa-regular fa-code-compare"></i></button>
                    <button className="menu-link"><i className="fa-regular fa-bag-shopping"></i></button>
                    {/* <a href="#"><i className="fa-regular fa-repeat"></i></a> */}
                </div>
                <NavLink to="/products" className="btn-theme btn-card-theme" >
                    <span className="corner-left"></span>
                    QUICK VIEW
                    <span className="corner-right"></span>
                </NavLink>
            </div>
            <div className="card-body">
                <p className="card-category">Category</p>
                <h5 className="card-title">Modern Black Blouse</h5>  
                <p className="card-rating">
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                </p>
                <p className="card-price">$35.00</p>  
            </div>
        </div>
    </div>
  )
}

export default productCard