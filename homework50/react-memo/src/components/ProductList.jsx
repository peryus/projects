import { useEffect, useMemo } from 'react'

function ProductList({
                       products,
                       search,
                       favoriteIds,
                       onToggleFavorite,
                     }) {
  const filteredProducts = useMemo(() => {
    console.log('Filtering products...')

    return products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase()),
    )
  }, [products, search])

  const totalPrice = useMemo(() => {
    console.log('Calculating total price...')

    return filteredProducts.reduce(
        (total, product) => total + product.price,
        0,
    )
  }, [filteredProducts])

  useEffect(() => {
    console.log('onToggleFavorite callback reference changed')
  }, [onToggleFavorite])

  return (
      <section>
        <h2>Products</h2>

        <p>Found products: {filteredProducts.length}</p>
        <p>Total price: ${totalPrice}</p>

        <div className="product-list">
          {filteredProducts.map((product) => {
            const isFavorite = favoriteIds.includes(product.id)

            return (
                <article className="product-card" key={product.id}>
                  <h3>{product.name}</h3>
                  <p>Category: {product.category}</p>
                  <p>Price: ${product.price}</p>

                  <button
                      type="button"
                      onClick={() => onToggleFavorite(product.id)}
                  >
                    {isFavorite
                        ? 'Remove from favorites'
                        : 'Add to favorites'}
                  </button>
                </article>
            )
          })}
        </div>

        {filteredProducts.length === 0 && (
            <p>No products found.</p>
        )}
      </section>
  )
}

export default ProductList