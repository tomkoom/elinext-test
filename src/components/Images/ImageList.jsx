import React from "react";
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
						<div className="mt-2">
							<h5>
								{image.title.length > 32
									? image.title.substring(0, 32)
									: image.title}
							</h5>

							{!props.bookmarks
								.map((bookmark) => bookmark.id)
								.includes(image.id) ? (
								<div
									style={{
										display: "inline-flex",
										cursor: "pointer",
										gap: "8px",
										color: "#007bff",
									}}
									onClick={() =>
										props.handleAddBookmark(image)
									}
								>
									<FontAwesomeIcon
										className="mt-1"
										icon={faBookmark}
									/>
									<p>Bookmark</p>
								</div>
							) : (
								<div
									style={{
										display: "inline-flex",
										cursor: "pointer",
										gap: "8px",
										color: "#007bff",
									}}
									onClick={() =>
										props.handleRemoveBookmark(image)
									}
								>
									<FontAwesomeIcon
										className="mt-1"
										icon={faTimes}
									/>
									<p>Remove</p>
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
