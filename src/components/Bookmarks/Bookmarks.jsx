import React from "react";
import BookmarkList from "./BookmarkList";

const Bookmarks = (props) => {
	return (
		<div>
			<h1>Bookmarks</h1>
			<div className="mt-4">
				<BookmarkList
					bookmarks={props.bookmarks}
					handleBookmarkAction={props.handleRemoveBookmark}
				/>
			</div>
		</div>
	);
};

export default Bookmarks;
