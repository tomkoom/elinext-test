import React from "react";
import ImageList from "./ImageList";
import SearchBox from "../SearchBox/SearchBox";

const Images = (props) => {
	return (
		<div>
			<h1>Images</h1>

			<SearchBox
				searchValue={props.searchValue}
				setSearchValue={props.setSearchValue}
			/>

			<ImageList
				images={props.images}
				bookmarks={props.bookmarks}
				searchValue={props.searchValue}
				handleAddBookmark={props.handleAddBookmark}
				handleRemoveBookmark={props.handleRemoveBookmark}
			/>
		</div>
	);
};

export default Images;
