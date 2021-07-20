import React from "react";
import "./SearchBox.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBox = (props) => {
	return (
		<div className="SearchContainer">
			<input
				className="SearchInput"
				type="text"
				placeholder="Search images"
				onChange={(event) => props.setSearchValue(event.target.value)}
			/>
			<FontAwesomeIcon icon={faSearch} color="#A0AEC0" />
		</div>
	);
};

export default SearchBox;
