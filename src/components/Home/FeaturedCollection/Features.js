const apiUrl = process.env.REACT_APP_API_URL

export const featureCollections = [
	{
		slideImg: './sofa-collection.jpg',
		title: 'Sofa Collection',
		desc: 'Dope Dood high quality sofa collection',
		productName: 'Rura Collection',
		productImg: `sofa.jpg`,
		price: 1750,
		link: '/product/616b1eec93d32743b004665f',
		collectionLink: '/shop/furniture/sofa'
	},
	{
		slideImg: 'chairs-collection.jpg',
		title: 'Chair Collection',
		desc: 'Dope Dood high quality chair collection',
		productName: 'Demi Chair',
		productImg: `${apiUrl}/61687bc3267f751e7c53ac9e/1.png`,
		price: 850,
		link: '/product/61687bc3267f751e7c53ac9e',
		collectionLink: '/shop/furniture/chair'
	},
	{
		slideImg: 'lighting-collection.jpg',
		title: 'Lamp Collection',
		desc: 'Dope Dood high quality Lights collection',
		productName: 'Sineta Lamp',
		productImg: `${apiUrl}/616d72155c825d3d24e0f301/1.png`,
		price: 320,
		link: '/product/616d72155c825d3d24e0f301',
		collectionLink: '/shop/lighting'
	},
]