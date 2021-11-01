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

import { setCategories, setInitialCart, userExists, setAllFavs } from "./store/Reducer/reducer";

import { useDispatch } from 'react-redux';
import { get, post } from './utils/fetch';

import { toast } from 'react-toastify';

const apiUrl = process.env.REACT_APP_API_URL

function App() {

	const dispatch = useDispatch()

	useEffect( () => {

		const currentCart = JSON.parse(localStorage.getItem('cart'))

		if( currentCart ) dispatch(setInitialCart())

		async function getCats() {

			const categories = await get(`${apiUrl}/api/categories`)

			if( !categories || !categories.categories ) {
				toast.error('Server not responding')
				return
			} else dispatch(setCategories(categories.categories))

		}

		getCats()

		async function checkUser() {
			const userChecked = await post( `${apiUrl}/api/user/check`)

			if( userChecked && userChecked.success ) {

				dispatch( userExists(userChecked.userInfo) )

				if( userChecked.allFavs && userChecked.allFavs.length ) dispatch( setAllFavs(userChecked.allFavs) )

			}
			else localStorage.removeItem('user')
		}

		const user = JSON.parse( localStorage.getItem('user') )

		if( user && user.accessToken ) checkUser()
		
	},[])

	const notifProps = {
		position: "bottom-right",
		autoClose: 3000,
		hideProgressBar: false,
		newestOnTop: false,
		closeOnClick: true,
		pauseOnFocusLoss: false,
		draggable: true,
		pauseOnHover: true,
		theme: "dark"
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

					{/* <Route exact path="/newp" >
						<NewProduct />
					</Route> */}

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
