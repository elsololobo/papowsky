import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import userSlice from './slices/userSlice'
import logger from 'redux-logger'

const store = configureStore({
  reducer: {
    user: userSlice,
  },
  middleware: [logger, ...getDefaultMiddleware()],
})
export default store
