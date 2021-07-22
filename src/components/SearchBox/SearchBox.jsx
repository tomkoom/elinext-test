import React from "react";
import { Form } from "react-bootstrap";

const SearchBox = (props) => {
	return (
		<div className="mt-4" style={{maxWidth: "480px"}}>
			<Form.Control
				type="text"
				placeholder="Search images"
				value={props.searchValue}
				onChange={(event) => props.setSearchValue(event.target.value)}
			/>
		</div>
	);
};

export default SearchBox;
