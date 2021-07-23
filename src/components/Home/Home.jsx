import React from "react";
import doge from "../doge.png";

const Home = () => {
	return (
		<div>
			<div style={{ display: "flex", alignItems: "center" }}>
				<div>
					<p style={{ display: "inline" }}>
						Start from Images section
					</p>
				</div>
				<div>
					<img
						src={doge}
						alt="doge"
						style={{ height: "32px", marginLeft: "6px" }}
					></img>
				</div>
			</div>

			<a
				href="https://github.com/tomkoom/elinext-test"
				style={{ textDecoration: "none" }}
				target="_blank"
				rel="noopener noreferrer"
			>
				Source code &#38; readme
			</a>
		</div>
	);
};

export default Home;
