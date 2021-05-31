import React from 'react'
import CheckoutForm from './CheckoutForm'
import CheckoutInfo from './CheckoutInfo'

export default function CheckoutWrap() {
	return (
		<section id="checkout" className="shop shop-cart checkout pt-30">
        <div className="container">
          <div className="row">
            
						<CheckoutForm />

						<CheckoutInfo />
              
          </div>
           {/* .row end  */}
        </div>
         {/* .container end  */}
      </section>
	)
}
