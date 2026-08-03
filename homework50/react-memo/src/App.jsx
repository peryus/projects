import { useCallback, useState } from 'react'
import ProductList from './components/ProductList.jsx'

const products = [
  {
    id: 1,
    name: 'Laptop',
    category: 'Electronics',
    price: 1200,
  },
  {
    id: 2,
    name: 'Smartphone',
    category: 'Electronics',
    price: 800,
  },
  {
    id: 3,
    name: 'Headphones',
    category: 'Accessories',
    price: 150,
  },
  {
    id: 4,
    name: 'Keyboard',
    category: 'Accessories',
    price: 90,
  },
  {
    id: 5,
    name: 'Monitor',
    category: 'Electronics',
    price: 350,
  },
]

function App() {
  const [search, setSearch] = useState('')
  const [favoriteIds, setFavoriteIds] = useState([])
  const [counter, setCounter] = useState(0)

  const handleToggleFavorite = useCallback((productId) => {
    setFavoriteIds((previousIds) => {
      const isFavorite = previousIds.includes(productId)

      if (isFavorite) {
        return previousIds.filter((id) => id !== productId)
      }

      return [...previousIds, productId]
    })
  }, [])

  return (
      <main className="container">
        <h1>Product catalog</h1>

        <section className="controls">
          <label htmlFor="search">Search products</label>

          <input
              id="search"
              type="text"
              value={search}
              placeholder="Enter product name"
              onChange={(event) => setSearch(event.target.value)}
          />
        </section>

        <section className="counter">
          <h2>Render counter: {counter}</h2>

          <button
              type="button"
              onClick={() => setCounter((value) => value + 1)}
          >
            Increase counter
          </button>

          <p>
            Changing this counter does not restart product filtering because
            the calculation is memoized with useMemo.
          </p>
        </section>

        <ProductList
            products={products}
            search={search}
            favoriteIds={favoriteIds}
            onToggleFavorite={handleToggleFavorite}
        />
      </main>
  )
}

export default App