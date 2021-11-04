import { createSlice } from '@reduxjs/toolkit'
import { 
		setAllProductsAction, setProductQuickViewAction, emptyProductQuickViewAction, getSingleProduct,
		toggleGettingProduct, userExistsAction,	setUserAction, setRecentProductsAction, setCategoriesAction, changeProductsFilterOptionsAction,
		addToCartAction, removeFromCartAction,	setInitialCartAction, clearCartAction,	changeCartItemQAction, toggleProductFavoriteAction,
		setAllFavsAction,
} from './actions'

export const counterSlice = createSlice({
  name: 'products',
  initialState: {
    allProducts: [],
		singleProduct: {},
		gettingSingleProduct: false,
    shownProducts: [],
		allUserFavs: [],
		user: undefined,
		categories: [],
		quickViewProduct: {},
		recentProducts: [],
		filters: {
			price: {},
			size: [],
			color: []
		},
		cart: []
  },
  reducers: {
    setAllProducts: setAllProductsAction,
		setProductQuickView: setProductQuickViewAction,
		emptyProductQuickView: emptyProductQuickViewAction,
		setSingleProduct: getSingleProduct,
		changeGettingProduct: toggleGettingProduct,
		setRecentProducts: setRecentProductsAction,
		setCategories: setCategoriesAction,
		changeProductsFilterOptions: changeProductsFilterOptionsAction,
		addToCart: addToCartAction,
		clearCart: clearCartAction,
		changeCartItemQ: changeCartItemQAction,
		setInitialCart: setInitialCartAction,
		removeFromCart: removeFromCartAction,
		toggleProductFavorite: toggleProductFavoriteAction,
		setAllFavs: setAllFavsAction,
		userExists: userExistsAction,
		setUser: setUserAction,
  },
})

// Action creators are generated for each case reducer function
export const { 
	setAllProducts, setProductQuickView, emptyProductQuickView, setSingleProduct, changeGettingProduct, userExists, setUser, toggleProductFavorite,
	setAllFavs, setRecentProducts, setCategories, changeProductsFilterOptions, addToCart, setInitialCart, removeFromCart, clearCart,
	changeCartItemQ } = counterSlice.actions

export default counterSlice.reducer