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
						<Shop />
					</Route>

					<Route exact path="/contact" >
						<Contact />
					</Route>

				</Switch>

				<Footer />
				
			</div>

    </Router>
  );
}

export default App;
