import React from "react";
import "./Images.css";
import ImageList from "./ImageList/ImageList";
import SearchBox from "../SearchBox";


const Images = (props) => {


	return (
		<div className="Main">
			<h1>Images</h1>
			<div className="divider16"></div>
			<div className="Search">
				<SearchBox
					searchValue={props.searchValue}
					setSearchValue={props.setSearchValue}
				/>
			</div>
			<div className="divider16"></div>
			<div>
				<ImageList
					images={props.images}
					searchValue={props.searchValue}
					handleBookmarkAction={props.handleAddBookmark}
				/>
			</div>
		</div>
	);
};

export default Images;

// const handleAddBookmark = (image) => {
// 	if (!bookmarks.includes(image)) {
// 		const newBookmarkList = [...bookmarks, image];

// 		setBookmarks(newBookmarkList);
// 		saveToLocalStorage(newBookmarkList);
// 	}
// };
