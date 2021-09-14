import { useEffect} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Notification component
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
// import Preloader from './components/Preloader'
import Home from './views/Home'
import Shop from './views/Shop'
import Contact from './views/Contact'
import About from './views/About'
import Privacy from './views/Privacy'
import Terms from './views/Terms'
import Checkout from './views/Checkout'
import Cart from './views/Cart'
import Login from './views/Login'
import Product from './views/Product'

import './App.scss'

import { setCategories, setInitialCart, userExists } from "./store/Reducer/reducer";

import { useDispatch } from 'react-redux';
import { get, post } from './utils/fetch';

const apiUrl = process.env.REACT_APP_API_URL

function App() {

	const dispatch = useDispatch()

	useEffect( () => {

		const currentCart = JSON.parse(localStorage.getItem('cart'))

		if( currentCart ) dispatch(setInitialCart())

		async function getCats() {

			const categories = await get(`${apiUrl}/api/categories`)

			dispatch(setCategories(categories.categories))
			
		}

		getCats()

		async function checkUser() {
			return await post( `${apiUrl}/api/user/check`)
		}

		const user = JSON.parse( localStorage.getItem('user') )

		if( user && user.accessToken ) {

			const userCheck = checkUser()

			if( userCheck.success )	dispatch( userExists(true) )
			else localStorage.removeItem('user')

		}
		
	},[])

	const notifProps = {
		position: "bottom-right",
		autoClose: 3000,
		hideProgressBar: false,
		newestOnTop: false,
		closeOnClick: true,
		pauseOnFocusLoss: false,
		draggable: true,
		pauseOnHover: true
	}

  return (
    <Router>

			<div className="app-wrapper clearfix">

				{/* <Preloader /> */}
				<Header />

				<Switch>

					<Route exact path="/" >
						<Home />
					</Route>

					<Route exact path="/shop/:cat?/:subcat?" >
						<Shop />
					</Route>

					<Route exact path="/product/:id?" >
						<Product />
					</Route>

					<Route exact path="/about" >
						<About />
					</Route>

					<Route exact path="/contact" >
						<Contact />
					</Route>

					<Route exact path="/privacy" >
						<Privacy />
					</Route>

					<Route exact path="/terms" >
						<Terms />
					</Route>

					<Route exact path="/cart" >
						<Cart />
					</Route>

					<Route exact path="/checkout" >
						<Checkout />
					</Route>

					<Route exact path="/login" >
						<Login />
					</Route>

				</Switch>

				<ToastContainer
					{...notifProps}
				/>

				<Footer />
				
			</div>

    </Router>
  );
}

export default App;
