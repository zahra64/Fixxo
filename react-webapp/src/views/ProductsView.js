import React from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import ProductGridSection from '../sections/ProductGridSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'

const ProductsView = ({items = []}) => {
  return (
    <>
    <MainMenuSection />
    <BreadcrumbSection currentPage="Products" />
    <ProductGridSection title="Products" items={items} />
    <FooterSection />
    </>
  )
}

export default ProductsView