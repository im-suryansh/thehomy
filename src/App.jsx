import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import "./App.css";
import CenterMode from "../components/Carousel/CenterMode";
import Banner from "../components/Banner/Banner";
import FeatureBanner from "../components/FeatureBanner";
import Footer from "../components/Footer/Footer";
import Contact from "../components/Contact";
import Why from "../components/why";
import FB from "../components/FB";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<BrowserRouter>
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
						path="/signup"
						element={
							<>
								{<Navbar />}
								<Contact />
								<Footer />
							</>
						}
					/>
					{/* <Route
					path="/signup"
					element={<>
						{<Navbar />}
					
						<Footer />
						</>
					}
					/>
					<Route
					path="/signup"
					element={<>
						{<Navbar />}
						<Contact />
						<Footer />
						</>
					}
					/> */}
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
