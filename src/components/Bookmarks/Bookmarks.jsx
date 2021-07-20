import React from "react";
import "./Bookmarks.css";
import BookmarkList from "./BookmarkList/BookmarkList";

const Bookmarks = (props) => {
	return (
		<div>
			<h1>Bookmarks</h1>
			<div className="divider16"></div>
			<div>
				<BookmarkList
					bookmarks={props.bookmarks}
					handleBookmarkAction={props.handleRemoveBookmark}
				/>
			</div>
		</div>
	);
};

export default Bookmarks;
