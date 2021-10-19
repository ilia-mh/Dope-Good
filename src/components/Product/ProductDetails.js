import React, { useState } from "react";
import './productDetails.scss'
import { useSelector } from "react-redux";

import Review from './Review/Review'

import { Markup } from 'interweave';


export default function ProductDetails() {

	const [showTab, setShowTab] = useState(0)

	const { _id, description, properties, additionalInfo, reviews } = useSelector((state) => state.shop.singleProduct);

  // const dispatch = useDispatch();

	const changeTab = (idx) => {
		if( showTab !== idx ) setShowTab(idx)
	}

  const allNoReplyReviews = () => reviews.filter( rev => {
    if( !rev.replyTo ) return true
    if( !rev.replyTo.length ) return true
    return false
  }).length

  return (
		_id ?
    <section
      id="product-detalis2"
      className="product-detalis product-detalis-2 pb-80"
    >
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-10 offset-lg-1">

            <div className="product--tabs tabs">

              {/* Nav tabs  */}
              <ul className="nav nav-tabs" role="tablist">
                <li>
                  <button
                    className={ showTab === 0 ? 'active' : ''}
										onClick={ () => changeTab(0) }
                  >
                    description
                  </button>
                </li>
                <li>
                  <button
										className={ showTab === 1 ? 'active' : ''}
										onClick={ () => changeTab(1) }
                  >
                    Addtional info
                  </button>
                </li>
                <li>
                  <button
										className={ showTab === 2 ? 'active' : ''}
										onClick={ () => changeTab(2) }
                  >
                    reviews({allNoReplyReviews()})
                  </button>
                </li>
              </ul>

              {/* Tab panes  */}
              <div className="tab-content">

                <div
                  className={`tab-pane fade ${ showTab === 0 ? 'show active' : '' }`}
                  id="description"
                >
                  <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-10 offset-lg-1">
                      <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-8">
                          <div className="product--desc">
                            <p>
                              
                              <Markup
                                content={ description }
                              />

                            </p>
                          </div>
                        </div>

                        {
                          properties.length > 0 &&
                            <div className="col-sm-12 col-md-12 col-lg-4">

                              {
                                properties.map( ({ title, items }) => 
                                  <div className="product--desc-list" key={title}>
                                    <h6>{ title }</h6>
                                    <ul className="list-unstyled mb-0">
                                      {
                                        items.map( (item,idx) => 
                                          <li key={idx} >{ item }</li>
                                        )
                                      }
                                    </ul>
                                  </div>
                                )
                              }

                            </div>
                        }
                        {/* .col-lg-8 end  */}
                      </div>
                    </div>
                  </div>
                  {/* .row end  */}
                </div>
                {/* #description end  */}

                <div
                  className={`tab-pane fade ${ showTab === 1 ? 'show active' : '' }`}
                  id="addtional-info"
                >
                  <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-10 offset-lg-1">
                      <div className="product--desc">

                        {
                          additionalInfo ?
                          <p>
                            <Markup
                              content={ additionalInfo }
                            />
                          </p>
                          :
                            'No additional info for this product.'
                        }

                      </div>
                    </div>
                  </div>
                </div>
                {/* #details end  */}

                <Review showTab={showTab} reviews={reviews} product_id={_id} />

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
		:
		null
	);
}
