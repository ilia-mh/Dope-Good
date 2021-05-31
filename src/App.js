import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
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

import './App.scss'

function App() {
  return (
    <Router>

			<div className="app-wrapper clearfix">

				{/* <Preloader /> */}
				<Header />

				<Switch>

					<Route exact path="/" >
						<Home />
					</Route>

					<Route exact path="/shop" >
						<Shop />
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

				</Switch>

				<Footer />
				
			</div>

    </Router>
  );
}

export default App;
