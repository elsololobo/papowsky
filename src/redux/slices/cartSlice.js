import { createSlice } from '@reduxjs/toolkit'
import { addItemToCart, removeItemFromCart } from '../utils/cartUtils'

const cartSlice = createSlice({
  name: 'cart',
  initialState: { hidden: true, cartItems: [] },
  reducers: {
    toggleCartHidden: (state) => {
      state.hidden = !state.hidden
    },
    addItem: (state, action) => {
      state.cartItems = addItemToCart(state.cartItems, action.payload)
    },
    clearItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      )
    },
    removeItem: (state, action) => {
      state.cartItems = removeItemFromCart(state.cartItems, action.payload)
    },
  },
})

export const {
  toggleCartHidden,
  addItem,
  removeItem,
  clearItem,
} = cartSlice.actions
export default cartSlice.reducer
