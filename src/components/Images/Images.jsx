import React from "react";
import ImageList from "./ImageList";
import SearchBox from "../SearchBox/SearchBox";
import { Button } from "react-bootstrap";

const Images = (props) => {
	return (
		<div>
			<h1>Images</h1>

			<SearchBox
				searchValue={props.searchValue}
				setSearchValue={props.setSearchValue}
			/>

			<div
				className="mt-4"
				style={{ display: "flex", alignItems: "center", gap: "12px" }}
			>
				<div style={{ display: "flex", gap: "8px" }}>
					<Button onClick={props.handlePrevClick}>Prev</Button>
					<Button onClick={props.handleNextClick}>Next</Button>
				</div>
				Page: {props.page}
			</div>

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
