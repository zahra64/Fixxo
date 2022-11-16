import React, {useState} from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import ProductGridSection from '../sections/ProductGridSection'



const HomeView = () => {

  const [featuredProducts, setFeaturedProducts] = useState([
    {id:1, name:"Modern Black Blouse", category: "Fashion", price :"$35.00", rating: 5, img:"https://images.pexels.com/photos/1600833/pexels-photo-1600833.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"},
    {id:2, name:"Modern Black Blouse", category: "Fashion", price :"$35.00", rating: 5, img:"https://images.pexels.com/photos/1187952/pexels-photo-1187952.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"},
    {id:3, name:"Modern Black Blouse", category: "Fashion", price :"$35.00", rating: 5, img:"https://images.pexels.com/photos/11465211/pexels-photo-11465211.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"},
    {id:4, name:"Modern Black Blouse", category: "Fashion", price :"$35.00", rating: 5, img:"https://images.pexels.com/photos/3755022/pexels-photo-3755022.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"}
  ])

  const [topProducts, setTopProducts] = useState([
    {id:1, name:"Modern Black Blouse", category: "Fashion", price :"$35.00", rating: 5, img:"https://images.pexels.com/photos/1600833/pexels-photo-1600833.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"},
    {id:2, name:"Modern Black Blouse", category: "Fashion", price :"$35.00", rating: 5, img:"https://images.pexels.com/photos/1187952/pexels-photo-1187952.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"},
    {id:3, name:"Modern Black Blouse", category: "Fashion", price :"$35.00", rating: 5, img:"https://images.pexels.com/photos/11465211/pexels-photo-11465211.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"} 
  ])

  return (
    <>
      <MainMenuSection />
      <ProductGridSection title="Featured Products" products={featuredProducts} />
      <ProductGridSection title="Top Products" products={topProducts} />
      <FooterSection />
    </>
  )
}

export default HomeView