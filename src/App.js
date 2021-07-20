import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Images from './components/Images/Images';
import { Switch, Route, Redirect } from "react-router-dom";
import Sidebar from './components/Sidebar/Sidebar';
import Bookmarks from './components/Bookmarks/Bookmarks';


function App() {
  const [images, setImages] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [searchValue, setSearchValue] = useState("");


  // API request
  const getImageRequest = async (searchValue) => {
    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=fc80275f938a5d77a50045e8994ac1a1&tags=${searchValue}&per_page=5&format=json&nojsoncallback=1`;

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


  // Get bookmarks from local storage when page loads
  useEffect(() => {
    const imageBookmarks = JSON.parse(
      localStorage.getItem("image-bookmarks")
    );

    setBookmarks(imageBookmarks);
  }, []);


  // Save to local storage function
  const saveToLocalStorage = (items) => {
    localStorage.setItem("image-bookmarks", JSON.stringify(items));
  };


  // Update bookmark list with added bookmark & save updated list to local storage
  const handleAddBookmark = (image) => {
    if (!bookmarks.includes(image)) {
      const newBookmarkList = [...bookmarks, image];

      setBookmarks(newBookmarkList);
      saveToLocalStorage(newBookmarkList);
    }
  };

  // Update bookmark list with removed bookmark & save updated list to local storage
  const handleRemoveBookmark = (image) => {
    const newBookmarkList = bookmarks.filter(
      (bookmark) => bookmark.id !== image.id
    );

    setBookmarks(newBookmarkList);
    saveToLocalStorage(newBookmarkList);
  };


  return (
    <div className="App">

      <Header />

      <div className="MainContainer">

        <div className="SidebarContainer">
          <Sidebar />
        </div>

        <div className="ContentContainer">
          <Switch>
            {/* <Redirect exact from="/" to="/images" /> */}
            <Route path="/images" render={() => <Images
              images={images}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              handleAddBookmark={handleAddBookmark} />} />
            <Route path="/bookmarks" render={() => <Bookmarks
              bookmarks={bookmarks}
              handleRemoveBookmark={handleRemoveBookmark} />} />
          </Switch>
        </div>

      </div>
    </div>
  );
}

export default App;
