import React, {useEffect, useState} from 'react'
import './style.min.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import HomeView from './views/HomeView';
import CategoriesView from './views/CategoriesView';
import ProductsView from './views/ProductsView';
import ProductDetailsView from './views/ProductDetailsView';
import ContactsView from './views/ContactsView';
import SearchView from './views/SearchView';
import CompareView from './views/CompareView';
import WishListView from './views/WishListView';
import ShoppingCartView from './views/ShoppingCartView';
import NotFoundView from './views/NotFoundView';
import { ProductContext} from './contexts/contexts'



function App() {

  // const [featuredProducts, setFeaturedProducts] = useState([
  const [products, setProducts] = useState([])

    useEffect (() =>{
      const fetchData = async () => {
        let result = await fetch ('https://win22-webapi.azurewebsites.net/api/products')
        setProducts(await result.json())
      }
      fetchData()
    }, [setProducts])


    // {id:1, name:"Modern Black Blouse", category: "Fashion", price :"$35.00", rating: 5, img:"https://images.pexels.com/photos/1600833/pexels-photo-1600833.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"},
    // {id:2, name:"Modern Black Blouse", category: "Fashion", price :"$35.00", rating: 5, img:"https://images.pexels.com/photos/1187952/pexels-photo-1187952.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"},
    // {id:3, name:"Modern Black Blouse", category: "Fashion", price :"$35.00", rating: 5, img:"https://images.pexels.com/photos/11465211/pexels-photo-11465211.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"},
    // {id:4, name:"Modern Black Blouse", category: "Fashion", price :"$35.00", rating: 5, img:"https://images.pexels.com/photos/3755022/pexels-photo-3755022.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"}

  



  return (
    <BrowserRouter>
      <ProductContext.Provider value={products}>
      <Routes>
        <Route path="/" element={<HomeView/>} />
        <Route path="/categories" element={<CategoriesView />} />
        {/* <Route path="/products" element={<ProductsView />} /> */}
        <Route path="/products" element={<ProductsView />} />
        <Route path="/products/:name" element={<ProductDetailsView />} />
        <Route path="/contacts" element={<ContactsView />} />
        <Route path="/search" element={<SearchView />} />
        <Route path="/compare" element={<CompareView />} />
        <Route path="/wishlist" element={<WishListView />} />
        <Route path="/shoppingcart" element={<ShoppingCartView />} />
        <Route path="*" element={<NotFoundView />} />
      </Routes>
      </ProductContext.Provider>
    </BrowserRouter>
  );
}

export default App;


// return (
//   <BrowserRouter>
//     <Routes>
//       {/* <Route path="/" element={<HomeView />} /> */}
//       <Route path="/" element={<HomeView items={products}/>} />
//       <Route path="/categories" element={<CategoriesView />} />
//       {/* <Route path="/products" element={<ProductsView />} /> */}
//       <Route path="/products" element={<ProductsView items={products}/>} />
//       <Route path="/products/:name" element={<ProductDetailsView />} />
//       <Route path="/contacts" element={<ContactsView />} />
//       <Route path="/search" element={<SearchView />} />
//       <Route path="/compare" element={<CompareView />} />
//       <Route path="/wishlist" element={<WishListView />} />
//       <Route path="/shoppingcart" element={<ShoppingCartView />} />

//       <Route path="*" element={<NotFoundView />} />
//     </Routes>
//    </BrowserRouter>
// );
// }