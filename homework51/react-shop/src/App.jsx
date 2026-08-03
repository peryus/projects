import { useState } from 'react'
import { Route, Routes } from 'react-router'
import { toast } from 'react-toastify'
import PromoBar from './components/PromoBar.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import CartModal from './components/CartModal.jsx'
import HomePage from './pages/HomePage.jsx'
import ShopPage from './pages/ShopPage.jsx'
import SignUpPage from './pages/SignUpPage.jsx'
import ActiveOrNo from './components/ActiveOrNo.jsx'

function App() {
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const handleAddToCart = (product) => {
    setCartItems((previousItems) => [
      ...previousItems,
      product,
    ])

    toast.success(`${product.name} added to cart`)
  }

  const handleRemoveItem = (itemIndex) => {
    setCartItems((previousItems) =>
        previousItems.filter(
            (_, index) => index !== itemIndex,
        ),
    )
  }

  const handleClearCart = () => {
    setCartItems([])
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

          <Route path="/sign"
                 element={<SignUpPage />} />
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