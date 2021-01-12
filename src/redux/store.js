import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import userSlice from './slices/userSlice'
import logger from 'redux-logger'
import cartSlice from './slices/cartSlice'

const store = configureStore({
  reducer: {
    user: userSlice,
    cart: cartSlice,
  },
  middleware: [logger, ...getDefaultMiddleware()],
})
export default store
