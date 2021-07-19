import React from "react";
import "./Main.css";

const Main = () => {
	return (
		<div className="Main">
			<div className="Search">
				<label for="gsearch">Search Google:</label>
				<input type="search" id="gsearch" name="gsearch" />
			</div>
		</div>
	);
};

export default Main;
