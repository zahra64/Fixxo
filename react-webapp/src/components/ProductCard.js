import React from 'react'

const productCard = () => {
  return (
    <div className="col">
        <div className="card">
            <div className="card-img">
                    <img src="assets/images/imges.jpg" alt="images" />
                <div className="card-menu">
                    <a href="#"><i className="fa-regular fa-repeat"></i></a>
                    <a href="#"><i className="fa-regular fa-heart"></i></a>
                    <a href="#"><i className="fa-regular fa-bag-shopping"></i></a>
                </div>
                <a className="_btn-theme btn-card-theme" href="#">
                    <span className="_btn-theme-left"></span>
                    QUICK VIEW
                    <span className="_btn-theme-right"></span>
                </a>
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