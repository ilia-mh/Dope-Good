import React from "react";

export const nextArrow = ({ next }) => (
	<div className="next-arrow">
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={ next } >
			<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
		</svg>
	</div>
)

export const prevArrow = ({ prev }) => (
	<div className="prev-arrow">
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={ prev } >
			<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
		</svg>
	</div>
)