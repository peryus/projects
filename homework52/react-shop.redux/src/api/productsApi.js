import products from '../data/products.js'

export const getProducts = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products)
    }, 600)
  })
}