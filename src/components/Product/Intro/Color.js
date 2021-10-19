import React from 'react'

import './intro.scss'

import ColorImg from '../../../assets/images/products/product-features/8.jpg'

export default function Color({ text, colors }) {
  return (
    <section
    id="product-features"
    className="
      product-detalis product-features-2 product-features-4
      pt-0
      pb-140
      bg-parallax
    "
    style={{ backgroundImage: `url(${ColorImg})` }}
  >

    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-5">
          <div className="heading">
            <h2 className="heading--title">Great Color Design</h2>
          </div>
          <div className="features--desc">
            <p>
              {
                text
              }
            </p>
          </div>

          { 
            colors &&
              <ul className="list-unstyled available--colors mb-50" style={{ justifyContent: 'flex-start' }} >

                { colors.map( (color,idx) => 
                    <li key={idx} style={{ marginRight: idx < (colors.length - 1) ? '20px' : '' }}>
                      <span style={{ backgroundColor: color.code }} className={color.name}></span>{color.name}
                    </li>
                  )
                }
              </ul>
          }
        </div>
      </div>
    </div>

  </section>
  )
}
