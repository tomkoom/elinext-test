import React from 'react';

const SearchBox = (props) => {
    return (
        <div>
            <input
                type="text"
                value={props.value}
                onChange={(event) => props.setSearchValue(event.target.value)}
                placeholder="Search images"
            ></input>
        </div>
    )
}

export default SearchBox;
