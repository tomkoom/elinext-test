import React from 'react';

const ImageList = (props) => {
    return (
        <div className="ImageList">

            {props.searchValue ? props.images.map((image, index) => (
                <div >
                    <img src={
                        "https://live.staticflickr.com/" +
                        image.server +
                        "/" +
                        image.id +
                        "_" +
                        image.secret +
                        ".jpg"
                    } />
                </div>
            )) : <p>Start entering search query</p>}
        </div>
    )
}

export default ImageList;
