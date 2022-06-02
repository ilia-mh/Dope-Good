
export const setAllProductsAction = ( state, action ) => {

	const { products } = action.payload

	let mappedProducts

	const { allUserFavs } = state


	if( state.allProducts.length ) {

		const Ids = state.allProducts.map( ({ _id }) => _id )

		const newProducts = products.filter( ({_id}) => !Ids.includes(_id) )

		if( newProducts.length ) {

			if( allUserFavs.length ) {
				mappedProducts = addFavToProducts(products,allUserFavs)
			} else mappedProducts = products
			
			state.allProducts.push(...newProducts)

			filterProductsAction(state)
		}
		

	} else {

		if( allUserFavs.length ) {
			mappedProducts = addFavToProducts(products,allUserFavs)
		} else mappedProducts = products
		
		state.allProducts.push(...mappedProducts)
		filterProductsAction(state)
	}


}

export const setProductQuickViewAction = ( state, action ) => {
	state.quickViewProduct = action.payload
}

export const emptyProductQuickViewAction = ( state ) => {
	state.quickViewProduct = {}
}

export const getSingleProduct = ( state, { payload } ) => {
	
	const id = payload._id

	if( state.allUserFavs.includes(id || '') ) payload.favoritted = true

	state.singleProduct = payload
}

export const toggleGettingProduct = ( state ) => {
	state.gettingSingleProduct = !state.gettingSingleProduct
}

export const setRecentProductsAction = ( state, action ) => {
	const recentProducts = action.payload.filter( product => product._id !== state.singleProduct._id ).map( product => {
		if( state.allUserFavs.includes(product._id) ) product.favoritted = true

		return product
	})
	state.recentProducts = recentProducts
}

export const setCategoriesAction = ( state, action ) => {

	const parents = action.payload.filter( cat => !cat.parent_id )
	const subs = action.payload.filter( cat => cat.parent_id )
	
	state.categories = parents.map( cat => {

		const subCategories = subs.filter( subcat => subcat.parent_id === cat._id )

		return {
			...cat,
			subCategories
		}
	})

}

export const changeProductsFilterOptionsAction = ( state, { payload } ) => {
	
	if( payload.target === 'cat' ) {

		if( payload.value.length > 1 ) {
			state.filters.cat = payload.value[0]
			state.filters.subCat = payload.value[1]
		} else {
			state.filters.cat = payload.value[0]
		}
	}

	if( payload.target === 'price' ) {
		state.filters.price = payload.value
	}

	if( payload.target === 'size' ) {
		if( state.filters.size.includes(payload.value) ) state.filters.size = state.filters.size.filter( size => size !== payload.value )
		else state.filters.size.push(payload.value)
	}

	if( payload.target === 'color' ) {
		if( state.filters.color.includes(payload.value) ) state.filters.color = state.filters.color.filter( color => color !== payload.value )
		else state.filters.color.push(payload.value)
	}

	filterProductsAction(state)
}

export const setInitialCartAction = ( state, action ) => {
	state.cart = getCart() || []
}

export const addToCartAction = ( state, { payload } ) => {

	state.cart = getCart() || []

	if( state.cart.length ) {

		const existingProducts = []

		state.cart.forEach( ( { _id }, idx ) => {
			if( _id === payload._id ) existingProducts.push(idx)
		})

		if( existingProducts.length ) {

			let hadSimillar = false

			existingProducts.some( (idx) => {

				let { options } = state.cart[idx]
	
				if( compareOptions(options, payload.options) ){

					state.cart[idx].q += payload.q
					hadSimillar = true

					return true
				}

				return false
				
			})

			if( !hadSimillar ) state.cart.push( payload )

		} else state.cart.push( payload )

	} else state.cart.push(payload)

	localStorage.setItem( 'cart', JSON.stringify(state.cart) )

}

export const removeFromCartAction = ( state, { payload } ) => {

	state.cart = getCart() || []

	state.cart = state.cart.filter( ( product, index ) => index !== payload )

	localStorage.setItem( 'cart', JSON.stringify(state.cart) )

}

export const clearCartAction = ( state, action ) => {
	state.cart = []

	localStorage.setItem( 'cart', JSON.stringify(state.cart) )

}

export const changeCartItemQAction = ( state, { payload } ) => {

	state.cart = getCart() || []

	state.cart = state.cart.map( (product,idx) => {

		if( idx === payload.idx ) {
			product.q += payload.q
		}

		return product

	})

	localStorage.setItem( 'cart', JSON.stringify(state.cart) )

}

export const setAllFavsAction = ( state, { payload } ) => {
	state.allUserFavs = payload.map( obj => obj.productId)
}

export const toggleProductFavoriteAction = ( state, { payload }) => {

	state.allProducts = state.allProducts.map( product => {
		if( product._id === payload ) product.favoritted = !product.favoritted
		return product
	})

	filterProductsAction(state)

	if( state.recentProducts.length ) {

		state.recentProducts = state.recentProducts.map ( product => {
			if( product._id === payload ) product.favoritted = !product.favoritted
	
			return product
		})
	}

	if( state.singleProduct._id === payload ) {
		state.singleProduct.favoritted = state.singleProduct.favoritted ? false : true
	}
}

export const userExistsAction = ( state, { payload } ) => {
	state.user = payload
}

export const setUserAction = ( state, { payload } ) => {
	state.user = payload
}

const filterProductsAction = ( state ) => {

	const { price, size, color, cat, subCat } = state.filters

	const filteredProducts = state.allProducts.filter( product => {

		if( cat ) {
			if( !product.category.includes(cat)  ) return false
		}

		if( subCat ) {
			if( !product.subCategory.includes(subCat) ) return false
		}

		// Price Filter
		if( price && price.min ) {
			const { min, max } = price

			if( product.price < min || product.price > max ) return false
		}

		// Color Filter
		if( color.length ) {

			const productColors = []

			for ( let productColor in product.options.color ) {
				productColors.push( product.options.color[productColor].name.toLowerCase() )
			}

			if( !productColors.some( productColor => color.includes(productColor) )) return false
		}

		// Size Filter
		if( size.length ) {

			const productSizes = []

			for ( let productSize in product.options.size ) {
				productSizes.push( product.options.size[productSize].code.toLowerCase() )
			}

			if( !productSizes.some( productSize => size.includes(productSize) )) return false
		}

		return true

	})

	state.shownProducts = filteredProducts
}

const getCart = () => JSON.parse(localStorage.getItem('cart'))

const addFavToProducts = (products,favs) => {

	return products.map( product => {

		if( favs.includes(product._id) ) product.favoritted = true

		return product
	})
}

const compareOptions = (option1, option2) => {

	if( option1.color !== option2.color || option1.size !== option2.size  ) {
		return false
	} else return true

}