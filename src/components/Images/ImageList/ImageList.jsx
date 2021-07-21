import React from "react";
import "./ImageList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

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
						<div className="PhotoInfo">
							<h3>
								{image.title.length > 24
									? image.title.substring(0, 24)
									: image.title}
							</h3>

							<div
								onClick={() =>
									props.handleBookmarkAction(image)
								}
							>
								<div className="BookmarkAction">
									<FontAwesomeIcon icon={faBookmark} />
									<p>Bookmark</p>
								</div>
							</div>
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
