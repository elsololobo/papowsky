import { createSlice } from '@reduxjs/toolkit'
import { addItemToCart } from '../utils/cartUtils'

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
  },
})

export const { toggleCartHidden, addItem } = cartSlice.actions
export default cartSlice.reducer
