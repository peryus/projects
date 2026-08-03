import { configureStore } from '@reduxjs/toolkit'

import cartReducer from '../features/cart/cartSlice.js'
import productsReducer from '../features/products/productsSlice.js'
import ordersReducer from '../features/orders/ordersSlice.js'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    orders: ordersReducer,
  },
})