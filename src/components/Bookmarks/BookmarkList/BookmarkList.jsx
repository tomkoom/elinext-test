import React from "react";
import "./BookmarkList.css";

const BookmarkList = (props) => {
	return (
		<div className="BookmarkList">
			{props.bookmarks.length !== 0 ? (
				props.bookmarks.map((image, index) => (
					<div>
						<img
							className="BookmarkItem"
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
						<div onClick={() => props.handleBookmarkAction(image)}>
							<p className="BookmarkAction">Remove bookmark</p>
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
