import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const BookmarkList = (props) => {
	return (
		<div className="d-flex flex-wrap" style={{ gap: "20px" }}>
			{props.bookmarks.length !== 0 ? (
				props.bookmarks.map((image, index) => (
					<div key={index}>
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
						<div className="d-flex flex-column mt-2">
							<h5>
								{image.title.length > 32
									? image.title.substring(0, 32)
									: image.title}
							</h5>

							{/* <h3>{image.title}</h3> */}

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
						</div>
					</div>
				))
			) : (
				<p>Add bookmarks from Images section</p>
			)}
		</div>
	);
};

export default BookmarkList;
