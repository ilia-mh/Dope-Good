import React, { useState } from 'react'
import ReactMapGL from 'react-map-gl';
import mapboxgl from 'mapbox-gl';
// import { Marker, Popup } from 'react-map-gl';


// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

export default function Map() {

	  // Initializing Map States
		const [viewport, setViewport] = useState({
			width: '100vw',
			height: '70vh',
			latitude: 42,
			longitude: -100,
			zIndex: 10,
			zoom: 4
		});

	return (
		<ReactMapGL
        {...viewport}
				className="contact-map"
        mapStyle="mapbox://styles/iliya-mh/ckoo5fjsrb35c17qeukklg2x7"
        onViewportChange={setViewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAP_GL_TOKEN}
        // onDblClick={showAddMarker}
      >

				{/* <Marker key={marker._id} latitude={marker.latitude} longitude={marker.longitude}>
					<div className="marker-div" onClick={ () => setshowPopup(marker) } >
						<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
						<h3>{ showMarkersText ? marker.title : '' }</h3>
					</div>
				</Marker> */}
			
		</ReactMapGL>
	)
}
