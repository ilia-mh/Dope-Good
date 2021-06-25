import React from 'react'

import ProductSlider from './ProductSlider'
import ProductInfo from './ProductInfo'

export default function Hero() {
	return (
		<section
        id="product-detalis10"
        className="product-hero product-detalis product-detalis-3 product-detalis-11 pt-0 pb-140 "
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
