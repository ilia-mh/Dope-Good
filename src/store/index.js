import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './Reducer/reducer'

export default configureStore({
  reducer: {
		shop: productsReducer,
	}
})