import {
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit'

import { sendOrder } from '../../api/ordersApi.js'

export const createOrder = createAsyncThunk(
    'orders/createOrder',
    async (orderData, { rejectWithValue }) => {
      try {
        return await sendOrder(orderData)
      } catch (error) {
        return rejectWithValue(
            error.message || 'Failed to create order',
        )
      }
    },
)

const initialState = {
  lastOrder: null,
  status: 'idle',
  error: null,
}

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    resetOrderStatus: (state) => {
      state.status = 'idle'
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
        .addCase(createOrder.pending, (state) => {
          state.status = 'loading'
          state.error = null
        })
        .addCase(createOrder.fulfilled, (state, action) => {
          state.status = 'succeeded'
          state.lastOrder = action.payload
        })
        .addCase(createOrder.rejected, (state, action) => {
          state.status = 'failed'
          state.error =
              action.payload || 'Failed to create order'
        })
  },
})

export const { resetOrderStatus } = ordersSlice.actions

export default ordersSlice.reducer