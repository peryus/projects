import { useState } from 'react'
import { Route, Routes } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import PromoBar from './components/PromoBar.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import CartModal from './components/CartModal.jsx'
import ActiveOrNo from './components/ActiveOrNo.jsx'
import HomePage from './pages/HomePage.jsx'
import ShopPage from './pages/ShopPage.jsx'
import SignUpPage from './pages/SignUpPage.jsx'

import {
  addToCart,
  removeFromCart,
  clearCart,
} from './features/cart/cartSlice.js'

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false)

  const dispatch = useDispatch()

  const cartItems = useSelector((state) => state.cart.items)

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
    toast.success(`${product.name} added to cart`)
  }

  const handleRemoveItem = (itemIndex) => {
    dispatch(removeFromCart(itemIndex))
  }

  const handleClearCart = () => {
    dispatch(clearCart())
  }

  return (
      <>
        <ActiveOrNo />
        <PromoBar />

        <Header
            cartCount={cartItems.length}
            onOpenCart={() => setIsCartOpen(true)}
        />

        <Routes>
          <Route
              path="/"
              element={
                <HomePage onAddToCart={handleAddToCart} />
              }
          />

          <Route
              path="/shop"
              element={
                <ShopPage onAddToCart={handleAddToCart} />
              }
          />

          <Route
              path="/sign"
              element={<SignUpPage />}
          />
        </Routes>

        <Footer />

        <CartModal
            isOpen={isCartOpen}
            onClose={() => setIsCartOpen(false)}
            cartItems={cartItems}
            onRemoveItem={handleRemoveItem}
            onClearCart={handleClearCart}
        />
      </>
  )
}

export default App