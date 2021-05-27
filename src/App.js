import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header/Header'
import Preloader from './components/Preloader'
import Home from './views/Home'

function App() {
  return (
    <Router>

			<div id="wrapperParallax" className="wrapper clearfix">

				{/* <Preloader /> */}
				<Header />

				<Switch>

					<Route exact path="/" >
						<Home />
					</Route>

				</Switch>
				
			</div>

    </Router>
  );
}

export default App;
