import React from 'react'

import './intro.scss'

import MaterialImg from '../../../assets/images/products/product-features/7.jpg'

export default function Material({ items }) {
  return (
    <section
    id="product-features"
    className="
      product-detalis product-features-3 product-detalis-2
      pt-0
      pb-180
      bg-parallax
    "
    style={{ backgroundImage: `url(${MaterialImg})` }}
  >

    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-5 col-md-offset-7">
          <div className="heading">
            <h2 className="heading--title">Great material</h2>
          </div>
          <div className="product--desc-list">
            <ul className="list-unstyled">
              {
                items.map( (item,idx) => <li key={idx}>{item}</li>)
              }
            </ul>
          </div>
        </div>
         {/* .col-lg-5 end --> */}
      </div>
       {/* .row end --> */}
    </div>
     {/* .container end --> */}
  </section>
  )
}
