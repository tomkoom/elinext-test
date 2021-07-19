import React, { useState, useEffect } from "react";
import "./Main.css";
import ImageList from "../ImageList";
import SearchBox from "../SearchBox";

const Main = () => {
	const [images, setImages] = useState([]);
	const [searchValue, setSearchValue] = useState("");

	const getImageRequest = async (searchValue) => {
		const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=062630aa4b61a148bc12e8ca74400546&tags=${searchValue}&per_page=5&format=json&nojsoncallback=1`;

		if (searchValue) {
			const response = await fetch(url);
			const responseJson = await response.json();

			if (responseJson.photos.photo) {
				setImages(responseJson.photos.photo);
			}
		}
	};

	useEffect(() => {
		getImageRequest(searchValue);
	}, [searchValue]);

	return (
		<div className="Main">
			<div className="Search">
				<SearchBox
					searchValue={searchValue}
					setSearchValue={setSearchValue}
				/>
			</div>

			<div className="ImageList">
				<ImageList images={images} searchValue={searchValue} />
			</div>
		</div>
	);
};

export default Main;
