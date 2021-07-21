import React, { useState, useEffect } from 'react';

// Components
import Images from './components/Images/Images';
import Bookmarks from './components/Bookmarks/Bookmarks';

// React router
import { Switch, Route, NavLink } from "react-router-dom";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages, faBookmark, faUser } from "@fortawesome/free-solid-svg-icons";

// Bootstrap
import { Navbar, Nav, Container } from 'react-bootstrap';
import Home from './components/Home/Home';



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
    const imageBookmarks = JSON.parse(localStorage.getItem("image-bookmarks")) || [];

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

      <Navbar bg="light" expand="sm">
        <Container className="px-4" fluid>


          <NavLink to="/" style={{ textDecoration: "none", marginRight: "16px" }} >
            <b>ImageFinder</b>
          </NavLink>


          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">


              <NavLink
                exact={true}
                activeClassName="IsActive"
                className="mx-2"
                to="/images"
                style={{ textDecoration: "none" }}
              >
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon icon={faImages} style={{ marginRight: "8px" }} />
                  Images
                </div>
              </NavLink>

              <NavLink
                exact={true}
                activeClassName="IsActive"
                className="mx-2"
                to="/bookmarks"
                style={{ textDecoration: "none" }}
              >
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon icon={faBookmark} style={{ marginRight: "8px" }} />
                  Bookmarks
                </div>
              </NavLink>
            </Nav>

            <Nav>

              <NavLink
                to="#" className="mx-2"
                style={{ textDecoration: "none", color: "#718096" }}
              >
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon icon={faUser} style={{ marginRight: "8px" }} />
                  Profile
                </div>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      <Container className="p-4" fluid>
        <Switch>
          <Route path="/images" render={() => <Images
            images={images}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            handleAddBookmark={handleAddBookmark} />} />
          <Route path="/bookmarks" render={() => <Bookmarks
            bookmarks={bookmarks}
            handleRemoveBookmark={handleRemoveBookmark} />} />
          <Route exact path="/" render={() => <Home />} />
        </Switch>
      </Container>

    </div>

  );
}

export default App;



// const handleAddBookmark = (image) => {
//   if (!bookmarks.includes(image)) {
//     const newBookmarkList = [...bookmarks, image];

//     setBookmarks(newBookmarkList);
//     saveToLocalStorage(newBookmarkList);
//   }
// };