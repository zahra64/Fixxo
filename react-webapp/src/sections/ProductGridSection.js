import React from 'react'
import ProductCard from '../components/ProductCard'

const ProductGridSection= () => {
  return (
    <section class="_featured-products">
        <div class="container">
            <div class="row row-cols-1 row-cols-md-4 g-4">
              <ProductCard />
            </div>
        </div>
 </section>
  )
}

export default ProductGridSection
