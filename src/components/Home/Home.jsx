import React from "react";
import doge from "../doge.png";

const Home = () => {
	return (
		<div style={{display: "flex", alignItems: "center"}}>
			<div>
				<p style={{ display: "inline" }}>Choose images or bookmarks</p>
			</div>
			<div>
				<img
					src={doge}
					alt="doge"
					style={{ height: "32px", marginLeft: "8px" }}
				></img>
			</div>
		</div>
	);
};

export default Home;
