import React from "react";
// import "./ImageList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const ImageList = (props) => {
	const Bookmark = props.Bookmark;

	return (
		<div className="d-flex flex-wrap mt-4" style={{ gap: "20px" }}>
			{props.searchValue ? (
				props.images.map((image, index) => (
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
						/>
						<div className="d-flex flex-column mt-2">
							<h5>
								{image.title.length > 32
									? image.title.substring(0, 32)
									: image.title}
							</h5>

							<div
								onClick={() =>
									props.handleBookmarkAction(image)
								}
							>
								<div className="d-flex" style={{cursor: "pointer"}}>
									<FontAwesomeIcon
										className="mt-1"
										icon={faBookmark}
									/>
									<p className="px-2">Bookmark</p>
								</div>
							</div>
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
