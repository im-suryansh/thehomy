import React from "react";

const Dashboard = () => {
	return (
		<div>
			<div className="detail">
				<div className="pfp">
					<img src="https://i.imgur.com/8Km9tLL.png" alt="profile" />
				</div>
				<div className="info">
					<span className="Dashboard-name">John Doe</span>
					<span className="Dashboard-info">9999999999</span>
					<span className="Dashboard-info">randommail@gmail.com</span>
					<span className="Dashboard-info">address</span>
				</div>
			</div>
			<div className="Dashboard-container">
				<div className="carousel"></div>
				<div>
					<div className="Dashboard-cards">
						<div className="Dashboard-card"></div>
						<div className="Dashboard-card"></div>
						<div className="Dashboard-card"></div>
						<div className="Dashboard-card"></div>
						<div className="Dashboard-card"></div>
						<div className="Dashboard-card"></div>
					</div>
                    <div className="calender"></div>
				</div>

			</div>
		</div>
	);
};

export default Dashboard;
