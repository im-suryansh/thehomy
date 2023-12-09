import React from "react";
import "./Contact.css";
import "../Navbar/Navbar.css";
function Contact() {
	return (
		<div className="cmain">
			<form className="cform">
				<p className="title">Contact us </p>

				<div className="flex">
					<label>
						<input
							required=""
							placeholder=""
							type="text"
							className="input"
						/>
						<span>Firstname</span>
					</label>

					<label>
						<input
							required=""
							placeholder=""
							type="text"
							className="input"
						/>
						<span>Lastname</span>
					</label>
				</div>

				<label>
					<input
						required=""
						placeholder=""
						type="email"
						className="input"
					/>
					<span>Email</span>
				</label>

				<label>
					<input
						required=""
						placeholder=""
						type="text"
						className="input"
					/>
					<span>Contact Info</span>
				</label>
				<label>
					<input
						required=""
						placeholder=""
						type="text"
						className="input message"
					/>
					<span>Message</span>
				</label>
				<button className="loginbtn submit">Submit</button>
			</form>
			<div className="box">
				<img src="../../public/contactus.png" alt="" srcset="" />
			</div>
		</div>
	);
}

export default Contact;
