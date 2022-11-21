import React from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import ProductGridSection from '../sections/ProductGridSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'

//without createContext must be written as below
// const ProductsView = ({items = []}) => {  
// <ProductGridSection title="Products" items={items} />
  const ProductsView = () => { 
  return (
    <>
    <MainMenuSection />
    <BreadcrumbSection currentPage="Products" />
    <ProductGridSection title="Products" />
    <FooterSection />
    </>
  )
}

export default ProductsView