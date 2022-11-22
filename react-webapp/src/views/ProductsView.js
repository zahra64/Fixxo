import React, { useContext } from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import ProductGridSection from '../sections/ProductGridSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import { ProductContext } from '../contexts/contexts'

//without createContext must be written as below
// const ProductsView = ({items = []}) => {  
// <ProductGridSection title="Products" items={items} />
  const ProductsView = () => { 
    const productContext = useContext(ProductContext)


  return (
    <>
    <MainMenuSection />
    <BreadcrumbSection currentPage="Products" />
    <ProductGridSection title="Products" items={productContext.all} />
    <FooterSection />
    </>
  )
}

export default ProductsView