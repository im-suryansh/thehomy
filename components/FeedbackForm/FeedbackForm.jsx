import React from "react";
import "./FeedbackForm.css";


const FeedbackForm = () => {
	return (
		<div className="feedback-form">
			<div className="cmain">
				<form className="cform">
					<p className="title">Feedback Form</p>

					<div className="flex">
						<label>
							<input
								required=""
								placeholder="Firstname"
								type="text"
								className="input"
							/>
						</label>

						<label>
							<input
								required=""
								placeholder="Lastname"
								type="text"
								className="input"
							/>
						</label>
					</div>

					<label>
						<input
							required=""
							placeholder="Contact Info"
							type="contact"
							className="input"
						/>

						<div className="ff-wrapper">
							<div className="ff-card">
								<input
									className="ff-input"
									type="radio"
									name="card"
									value="basic"
								/>
								<span className="ff-check"></span>
								<label className="ff-label">
									<div className="ff-title">BASIC</div>
									<div className="ff-price">
										<span className="ff-span">$</span>
										15
										<span className="ff-span">/month</span>
									</div>
								</label>
							</div>
							<div className="ff-card">
								<input
									className="ff-input"
									type="radio"
									name="card"
									value="standard"
								/>
								<span className="ff-check"></span>
								<label className="ff-label">
									<div className="ff-title">STANDARD</div>
									<div className="ff-price">
										<span className="ff-span">$</span>
										30
										<span className="ff-span">/month</span>
									</div>
								</label>
							</div>
							<div className="ff-card">
								<input
									className="ff-input"
									type="radio"
									name="card"
									value="premium"
								/>
								<span className="ff-check"></span>
								<label className="ff-label">
									<div className="ff-title">PREMIUM</div>
									<div className="ff-price">
										<span className="ff-span">$</span>
										60
										<span className="ff-span">/month</span>
									</div>
								</label>
							</div>
						</div>
					</label>
					<textarea
						className="form-control"
						name="message"
						rows="7"
						placeholder="Message"
						required
					></textarea>
					<button className="loginbtn submit">Submit</button>
				</form>
				<div className="box">
					<img src="../../public/contactus.png" alt="" srcset="" />
				</div>
			</div>
		</div>
	);
};

export default FeedbackForm;
