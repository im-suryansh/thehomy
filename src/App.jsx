import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import "./App.css";
import CenterMode from "../components/Carousel/CenterMode";
import Banner from "../components/Banner/Banner";
import FeatureBanner from "../components/FeatureBanner";
import Footer from "../components/Footer/Footer";
import Contact from "../components/Contact";
import Why from "../components/why";
import Login from "../components/Login";
import FB from "../components/FB";
import AboutUs from "../components/AboutUs";
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"

import SignUp from "../components/SignUp";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<Router>
				<Routes>
					<Route
						path="/"
						element={
							<>
								{<Navbar />}
								{<Banner />}
								{<Why />}
								{<CenterMode />}
								{<FeatureBanner />}
								<FB/>
								{<Footer />}
							</>
						}
					/>
					<Route
						path="/contact"
						element={
							<>
								{<Navbar />}
								<Contact />
								<Footer />
							</>
						}
					/>
					<Route
						path="/Login"
						element={
							<>
								{<Navbar />}
								<Login />
								<Footer />
							</>
						}
					/>			<Route
					path="/AboutUs"
					element={
						<>
							{<Navbar />}
							<AboutUs />
							<Footer />
						</>
					}
				/>
				<Route
						path="/SignUp"
						element={
							<>
								{<Navbar />}
								
								<SignUp />
								<Footer />
							</>
						}
					/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
