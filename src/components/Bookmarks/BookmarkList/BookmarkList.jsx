import React from "react";
import "./BookmarkList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const BookmarkList = (props) => {
	return (
		<div className="BookmarkList">
			{props.bookmarks.length !== 0 ? (
				props.bookmarks.map((image, index) => (
					<div className="PhotoCard">
						<img
							className="BookmarkPhoto"
							src={
								"https://live.staticflickr.com/" +
								image.server +
								"/" +
								image.id +
								"_" +
								image.secret +
								".jpg"
							}
						/>
						<div className="PhotoInfo">
							<h3>
								{image.title.length > 24
									? image.title.substring(0, 24)
									: image.title}
							</h3>

							{/* <h3>{image.title}</h3> */}

							<div
								onClick={() =>
									props.handleBookmarkAction(image)
								}
							>
								<div className="BookmarkAction">
									<FontAwesomeIcon icon={faTimes} />
									<p>Remove</p>
								</div>
							</div>
						</div>
					</div>
				))
			) : (
				<p>Add bookmarks from Images section</p>
			)}
		</div>
	);
};

export default BookmarkList;
