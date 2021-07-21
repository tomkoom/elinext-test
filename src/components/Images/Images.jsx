import React from "react";
// import "./Images.css";
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
				searchValue={props.searchValue}
				handleBookmarkAction={props.handleAddBookmark}
			/>
		</div>
	);
};

export default Images;
