import React from "react";
import "./ImageList.css";

const ImageList = (props) => {
	const Bookmark = props.Bookmark;

	return (
		<div className="ImageList">
			{props.searchValue ? (
				props.images.map((image, index) => (
					<div>
						<img
							className="ImageItem"
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
							<p className="BookmarkAction">Add to Bookmarks</p>
						</div>
					</div>
				))
			) : (
				<div>
					{/* <div className="divider16"></div> */}
					<p>Start entering search query</p>
				</div>
			)}
		</div>
	);
};

export default ImageList;
