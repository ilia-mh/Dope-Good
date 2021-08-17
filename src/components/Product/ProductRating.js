import React from 'react'
import { range } from "../../utils/range";

export default function ProductRating({ rate }) {

	const activeStar = Math.ceil(rate);
  const emptyStar = 5 - activeStar;

	return (
		<div className="product--rating">
		{ range(1, activeStar).map((idx) => (
			<i className="fa fa-star active" key={idx}></i>
		))}
		{ range(1, emptyStar).map((idx) => (
			<i className="fa fa-star" key={idx}></i>
		))}
	</div>
	)
}
