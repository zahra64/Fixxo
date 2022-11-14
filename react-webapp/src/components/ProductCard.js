import React from 'react'

const productCard = () => {
  return (
    <div class="col">
        <div class="card">
            <div class="img">
                    <img src="assets/images/imges.jpg" alt="images" />
                <div class="card-menu">
                    <a href="#"><i class="fa-regular fa-repeat"></i></a>
                    <a href="#"><i class="fa-regular fa-heart"></i></a>
                    <a href="#"><i class="fa-regular fa-bag-shopping"></i></a>
                </div>
                <a class="_btn-theme" href="#">
                    <span class="_btn-theme-left"></span>
                    QUICK VIEW
                    <span class="_btn-theme-right"></span>
                </a>
            </div>
            <div class="card-body">
                <p class="card-category">Category</p>
                <h5 class="card-title">Modern Black Blouse</h5>  
                <p class="card-rating">
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                </p>
                <p class="card-price">$35.00</p>  
            </div>
        </div>
    </div>
  )
}

export default productCard