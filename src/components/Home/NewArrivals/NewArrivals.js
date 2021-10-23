import React from "react";

import { Link } from 'react-router-dom'

import RecentProducts from "../../Product/RecentProducts";

import './newarrivals.scss'

export default function NewArrivals() {
  return (
    <section
      id="products2"
      className="products pt-0 pb-150 pb-60-xs text-center new-arrivals"
    >
      <div className="container-fluid">
        <div className="row">

          <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="heading heading-2 mb-30">
              <h2 className="heading--title">New Arrivals</h2>
            </div>
          </div>
					
        </div>

				<div className="recent-products">
					<RecentProducts noTitle={true} slideNum={5} />
				</div>

				<div className="row mt-40">
					<div className="col-sm-12 col-md-12 col-lg-12 text--center">
						<Link to="/shop" className="btn--more btn--more-1">VIEW ALL PRODUCTS</Link>
					</div>
				</div>

      </div>
    </section>
  );
}
