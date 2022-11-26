import React, { useContext } from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import ShowcaseSection from '../sections/ShowcaseSection'
import BannersSection from '../sections/BannersSection'
import ProductGridSection from '../sections/ProductGridSection'
import { ProductContext } from '../contexts/contexts'
import FlashSaleSection from '../sections/FlashSaleSection'



//without createContext must be written as below:
// import React, {useState} from 'react'
//  const HomeView = ({items= []}) => { 
{/* <ProductGridSection title="Featured Products" items={items} /> */}

  const HomeView = () => {
    const productContext = useContext(ProductContext)

  window.top.document.title = 'Fixxo.'
  
  return (
    <>
      <header>
        <MainMenuSection />
        <ShowcaseSection />
      </header>

      <ProductGridSection title="Featured Products" items={productContext.featuredProducts}/>
      {/* <ProductGridSection title="Featured Products" products={featuredProducts} /> */}
      {/* <ProductGridSection title="Top Products" products={topProducts} /> */}
      <BannersSection />
      <FlashSaleSection  items={productContext.saleProducts}/>
      
     
  

      <FooterSection />
    </>
  )
}

export default HomeView



//first:
// const HomeView = () => {

  // window.top.document.title = 'Fixxo.'
  
  // const [featuredProducts, setFeaturedProducts] = useState([
  //   {id:1, name:"Modern Black Blouse", category: "Fashion", price :"$35.00", rating: 5, img:"https://images.pexels.com/photos/1600833/pexels-photo-1600833.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"},
  //   {id:2, name:"Modern Black Blouse", category: "Fashion", price :"$35.00", rating: 5, img:"https://images.pexels.com/photos/1187952/pexels-photo-1187952.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"},
  //   {id:3, name:"Modern Black Blouse", category: "Fashion", price :"$35.00", rating: 5, img:"https://images.pexels.com/photos/11465211/pexels-photo-11465211.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"},
  //   {id:4, name:"Modern Black Blouse", category: "Fashion", price :"$35.00", rating: 5, img:"https://images.pexels.com/photos/3755022/pexels-photo-3755022.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"}
  // ])

  // const [topProducts, setTopProducts] = useState([
  //   {id:1, name:"Modern Black Blouse", category: "Fashion", price :"$35.00", rating: 5, img:"https://images.pexels.com/photos/1600833/pexels-photo-1600833.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"},
  //   {id:2, name:"Modern Black Blouse", category: "Fashion", price :"$35.00", rating: 5, img:"https://images.pexels.com/photos/1187952/pexels-photo-1187952.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"},
  //   {id:3, name:"Modern Black Blouse", category: "Fashion", price :"$35.00", rating: 5, img:"https://images.pexels.com/photos/11465211/pexels-photo-11465211.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"} 
  // ])

//   return (
//     <>
//       <MainMenuSection />
//       <ProductGridSection title="Featured Products" products={featuredProducts} />
//       <ProductGridSection title="Top Products" products={topProducts} />
//       <FooterSection />
//     </>
//   )
// }

// export default HomeView