import { createSlice } from '@reduxjs/toolkit'
import { setAllProductsAction, setProductQuickViewAction, emptyProductQuickViewAction, getSingleProduct, toggleGettingProduct } from './actions'

export const counterSlice = createSlice({
  name: 'products',
  initialState: {
    allProducts: [],
		singleProduct: {},
		gettingSingleProduct: false,
    shownProducts: [],
		user: {},
		categories: [],
		subCategories: [],
		quickViewProduct: {}
  },
  reducers: {
    setAllProducts: setAllProductsAction,
		setProductQuickView: setProductQuickViewAction,
		emptyProductQuickView: emptyProductQuickViewAction,
		setSingleProduct: getSingleProduct,
		changeGettingProduct: toggleGettingProduct
  },
})

// Action creators are generated for each case reducer function
export const { setAllProducts, setProductQuickView, emptyProductQuickView, setSingleProduct, changeGettingProduct } = counterSlice.actions

export default counterSlice.reducer