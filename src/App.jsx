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
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "../components/SignUp";
import Support from "../components/Support";
import FoodForm from "../components/foodform";
import Pricing from "../components/Pricing";
import Services from "../components/Services";
import CookPage from "../components/CookPage";

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
								{<FB />}
								{<Support />}
								{<Footer />}
							</>
						}
					/>
					<Route
						path="/contact"
						element={
							<>
								{<Navbar />}
								{<Support />}
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
								{<Support />}
								<Login />
								<Footer />
							</>
						}
					/>{" "}
					<Route
						path="/AboutUs"
						element={
							<>
								{<Support />}

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
								{<Support />}
								{<Navbar />}
								<SignUp />
								<Footer />
							</>
						}
					/>
					<Route
						path="/Services"
						element={
							<>
								{<Support />}
								{<Navbar />}
								<Services />
								<Pricing />
								<Footer />
							</>
						}
					/>
					<Route
						path="/cook/customize"
						element={
							<>
								{<Support />}
								{<Navbar />}
								<FoodForm />
								<Footer />
							</>
						}
					/>
					<Route
						path="/cook"
						element={
							<>
								{<Support />}
								{<Navbar />}
								<CookPage />
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
