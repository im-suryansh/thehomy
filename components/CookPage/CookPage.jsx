import React from "react";
import "./CookPage.css";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

const CookPage = () => {
	return (
		<>
			<div className="CookPage-container">
				<div>
					<h1>Kitchen King</h1>
					<h2>Cook</h2>
					<Link to="/cook/customize"  style={{ textDecorationLine: "none" }}> 
                    <div className="loginbtn ">
						Customize your way
						<MdArrowOutward />
					</div>

                        </Link>
				
				</div>

				<img src="../../public/temp1.jpg" alt="" />
			</div>
		</>
	);
};

export default CookPage;
