import React from 'react'
import { useState } from 'react'
import ProductCard from '../components/ProductCard'

const ProductGridSection= ({title}) => {

  const [products, setProducts] = useState([
    {id:1, name:"Modern Black Blouse", category: "Fashion", price :"$35.00", rating: 5, img:"https://images.pexels.com/photos/1600833/pexels-photo-1600833.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"},
    {id:2, name:"Modern Black Blouse", category: "Fashion", price :"$35.00", rating: 5, img:"https://images.pexels.com/photos/1187952/pexels-photo-1187952.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"},
    {id:3, name:"Modern Black Blouse", category: "Fashion", price :"$35.00", rating: 5, img:"https://images.pexels.com/photos/11465211/pexels-photo-11465211.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"},
    {id:4, name:"Modern Black Blouse", category: "Fashion", price :"$35.00", rating: 5, img:"https://images.pexels.com/photos/3755022/pexels-photo-3755022.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"}
  ])
  return (
    <section className="product-grid">
        <div className="container">
            <h1>{title}</h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
              {
                products.map(product => <ProductCard item ={product} />)
              }
              
         
            </div>
        </div>
 </section>
  )
}

export default ProductGridSection