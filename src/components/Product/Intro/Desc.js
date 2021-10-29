import React from 'react'

import './intro.scss'

// import DetailsImg from '../../../assets/images/products/product-features/6.jpg'
import DetailsImg from '../../../assets/images/banners/bg/10.jpg'

export default function Desc({ text }) {
  return (
    <section
    id="product-features"
    className=" pt-160 pb-160 bg-parallax"
    style={{ backgroundImage: `url(${DetailsImg})` }}
  >

    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-5">
          <div className="heading">
            <h2 className="heading--title">Product Description</h2>
          </div>
          <div className="features--desc">
            <p>
              { 
                text
              }
            </p>
          </div>
        </div>
         
      </div>
    </div>
     
  </section>
  )
}
