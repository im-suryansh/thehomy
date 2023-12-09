import React from "react";
import "./Login.css";
import { FcGoogle } from "react-icons/fc";
import { MdLock } from "react-icons/md";
import { Link } from "react-router-dom";
import { MdOutlineAlternateEmail } from "react-icons/md";
function Login() {
	return (
		<div className="page">
			<form className="form">
				<div className="flex-column">
					<label>Email </label>
				</div>
				<div className="inputForm">
					<h4>
						<MdOutlineAlternateEmail />
					</h4>
					<input
						type="text"
						className="input"
						placeholder="Enter your Email"
					/>
				</div>

				<div className="flex-column">
					<label>Password </label>
				</div>
				<div className="inputForm">
					<h4>
						<MdLock />
					</h4>

					<input
						type="password"
						className="input"
						placeholder="Enter your Password"
					/>
				</div>

				<div className="flex-row">
					<div>
						<input type="checkbox" />
						<label>Remember me </label>
					</div>
					<span className="span">Forgot password?</span>
				</div>

			
					<button className="button-submit">Sign In</button>
		
					
				<p className="p">
					Don't have an account?
					<Link to="/SignUp" style={{ textDecorationLine: "none" }}>
					 <span className="span">Sign Up</span>
				</Link>

				</p>

				<p className="p line">Or With</p>

				<div className="flex-row">
					<button className="btn google">
						<h2>
							<FcGoogle />
						</h2>
					</button>
				</div>
			</form>
			<img src="../../public/Loginimg.jpg" alt="" />
		</div>
	);
}

export default Login;
