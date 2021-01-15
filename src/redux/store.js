import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit'
import userSlice from './slices/userSlice'
import logger from 'redux-logger'
import cartSlice from './slices/cartSlice'
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import directorySlice from './slices/directorySlice'
import shopSlice from './slices/shopSlice'

const rootReducer = combineReducers({
  user: userSlice,
  cart: cartSlice,
  directory: directorySlice,
  shop: shopSlice,
})
const persistConfig = {
  key: 'root',
  storage,
  whitelist: 'cart',
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [
    logger,
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ],
})

export const persistor = persistStore(store)
