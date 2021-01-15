import { createSlice } from '@reduxjs/toolkit'
import SHOP_DATA from '../../pages/shop/shop.data'

const initialState = {
  collections: SHOP_DATA,
}
const shopSlice = createSlice({
  name: 'shop',
  initialState: initialState,
  reducers: {},
})

export default shopSlice.reducer
