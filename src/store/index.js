import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './Reducer/reducer'
import logger from 'redux-logger'

export default configureStore({
  reducer: {
		shop: productsReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})