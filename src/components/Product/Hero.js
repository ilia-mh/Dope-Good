import React from 'react'

import ProductSlider from './ProductSlider'
import ProductInfo from './ProductInfo'

export default function Hero() {
	return (
		<section
        id="product-detalis1"
        className="product-hero product-detalis product-detalis-1 bg-lightBlue pb-90 mtop-100"
      >
        <div className="container-fluid">
          <div className="row">

						<ProductSlider />

            <ProductInfo />
          
					</div>
        </div>
      </section>
	)
}
