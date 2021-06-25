

export const setAllProductsAction = ( state, action ) => {
	state.allProducts = action.payload
	state.shownProducts = action.payload
}

export const setProductQuickViewAction = ( state, action ) => {
	state.quickViewProduct = action.payload
}

export const emptyProductQuickViewAction = ( state ) => {
	state.quickViewProduct = {}
}

export const getSingleProduct = ( state, action ) => {
	state.singleProduct = action.payload
}

export const toggleGettingProduct = ( state ) => {
	state.gettingSingleProduct = !state.gettingSingleProduct
}