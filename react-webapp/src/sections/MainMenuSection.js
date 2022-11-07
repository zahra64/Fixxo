import React from 'react'
import MenuIcon from '../components/MenuIcon'

const MainMenuSection = () => {
  return (
    <nav class="mainmenu container">
        <div class="logo">
            Fixxo.
        </div>
        <div class="menu-links">
            <a href="index.html">Home</a>
            <a href="#">Categories</a>
            <a href="#">Products</a>
            <a href="contact.html">Contacs</a>
        </div>
        <div class="menu-icons">
            <MenuIcon link="/search" icon="fa-regular fa-magnifying-glass" />
            <MenuIcon link="/compare" icon="fa-regular fa-repeat" />
            <MenuIcon link="/wishlist" icon="fa-regular fa-heart" />
            <MenuIcon link="/shoppingcart" icon="fa-regular fa-bag-shopping" />

        </div>
</nav>
  )
}

export default MainMenuSection