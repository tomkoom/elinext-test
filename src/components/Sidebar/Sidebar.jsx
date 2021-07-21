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
					<NavLink
						exact={true}
						activeClassName="IsActive"
						className="NavLink"
						to="/images"
					>
						<div className="SidebarItem">
							<div className="Icon">
								<FontAwesomeIcon icon={faImages} size="lg" />
							</div>
							<p>
								<b>Images</b>
							</p>
						</div>
					</NavLink>
				</li>
				<li>
					<NavLink
						exact={true}
						activeClassName="IsActive"
						className="NavLink"
						to="/bookmarks"
					>
						<div className="SidebarItem">
							<div className="Icon">
								<FontAwesomeIcon icon={faBookmark} size="lg" />
							</div>
							<p>
								<b>Bookmarks</b>
							</p>
						</div>
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
