import {
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit'

import { getProducts } from '../../api/productsApi.js'

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async (_, { rejectWithValue }) => {
      try {
        return await getProducts()
      } catch (error) {
        return rejectWithValue(
            error.message || 'Failed to load products',
        )
      }
    },
)

const initialState = {
  items: [],
  status: 'idle',
  error: null,
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
        .addCase(fetchProducts.pending, (state) => {
          state.status = 'loading'
          state.error = null
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
          state.status = 'succeeded'
          state.items = action.payload
        })
        .addCase(fetchProducts.rejected, (state, action) => {
          state.status = 'failed'
          state.error =
              action.payload || 'Failed to load products'
        })
  },
})

export default productsSlice.reducer