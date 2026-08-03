export const sendOrder = async (orderData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!orderData.items?.length) {
        reject(new Error('Cart is empty'))
        return
      }

      resolve({
        id: Date.now(),
        ...orderData,
        createdAt: new Date().toISOString(),
      })
    }, 700)
  })
}