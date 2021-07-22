import React from "react";
// import "./ImageList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faTimes } from "@fortawesome/free-solid-svg-icons";

const ImageList = (props) => {
	return (
		<div className="d-flex flex-wrap mt-4" style={{ gap: "20px" }}>
			{props.searchValue ? (
				props.images.map((image, index) => (
					<div key={index}>
						{/* Image */}
						<img
							style={{ maxHeight: "280px" }}
							src={
								"https://live.staticflickr.com/" +
								image.server +
								"/" +
								image.id +
								"_" +
								image.secret +
								".jpg"
							}
							alt={image.title}
						/>
						{/* Product info */}
						<div className="d-flex flex-column mt-2">
							<h5>
								{image.title.length > 32
									? image.title.substring(0, 32)
									: image.title}
							</h5>

							{!props.bookmarks.includes(image) ? (
								<div
									onClick={() =>
										props.handleAddBookmark(image)
									}
								>
									<div
										className="d-flex"
										style={{ cursor: "pointer" }}
									>
										<FontAwesomeIcon
											className="mt-1"
											icon={faBookmark}
										/>
										<p className="px-2">Bookmark</p>
									</div>
								</div>
							) : (
								<div
									onClick={() =>
										props.handleRemoveBookmark(image)
									}
								>
									<div
										className="d-flex"
										style={{ cursor: "pointer" }}
									>
										<FontAwesomeIcon
											className="mt-1"
											icon={faTimes}
										/>
										<p className="px-2">Remove</p>
									</div>
								</div>
							)}
						</div>
					</div>
				))
			) : (
				<p>Start entering search query</p>
			)}
		</div>
	);
};

export default ImageList;
