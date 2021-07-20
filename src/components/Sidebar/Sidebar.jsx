import React from "react";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages, faBookmark } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
	return (
		<div className="Sidebar">
			<ul>
				<li>
					<span title="Images">
						<NavLink
							exact={true}
							activeClassName="IsActive"
							className="NavLink"
							to="/images"
						>
							<FontAwesomeIcon icon={faImages} size="2x" />
						</NavLink>
					</span>
				</li>
				<li>
					<span title="Bookmarks">
						<NavLink
							exact={true}
							activeClassName="IsActive"
							className="NavLink"
							to="/bookmarks"
						>
							<FontAwesomeIcon icon={faBookmark} size="2x" />
						</NavLink>
					</span>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
