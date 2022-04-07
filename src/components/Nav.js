import {
  Avatar,
  Button,
  IconButton,
  Snackbar,
  Tooltip,
} from "@material-ui/core";
import logo from "../img/logo.svg";
import PublishIcon from "@material-ui/icons/Publish";
import SearchIcon from "@material-ui/icons/Search";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../actions";
import "../css/Nav.css";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { uploadPhoto } from "../api/photo";

function Nav() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fileRef = useRef();
  const [uploadMessage, setUploadMessage] = useState(null);
  const user = useSelector((state) => state.user);
  const currentAlbum = useSelector((state) => state.currentAlbum);

  const logout = () => {
    signOut(auth)
      .then(() => dispatch(setUser(null)))
      .catch((err) => console.log(err.message));
  };

  const getUploadImages = () => {
    fileRef.current.click();
  };

  const handleUploadImage = () => {
    const photos = fileRef.current.files;
    if (photos.length === 0) return;

    for (let photo of photos) {
      if (!photo.type.startsWith("image")) {
        return alert("only image can be uploaded");
      }
    }

    if (photos.length > 3) return alert("only 3 images can be uploaded");

    setUploadMessage(`Uploading ${photos.length} Photo`);
    uploadPhoto(photos, currentAlbum, user.uid, setUploadMessage);
  };

  const goToHomePage = () => navigate(`/`);

  return (
    <div className="nav">
      <div className="nav__logo" onClick={goToHomePage}>
        <img src={logo} width='200' alt=""></img>
      </div>

      <div className="nav_search">
        <SearchIcon className="nav__searchIcon" />
        <input
          type="text"
          className="nav__searchInput"
          placeholder="Search your photos"
        />
      </div>

      <div className="nav__right">
        <Button
          startIcon={<PublishIcon />}
          size="small"
          className="nav__rightUploadBtn"
          onClick={getUploadImages}
        >
          Upload
        </Button>

        <Tooltip title="Logout" arrow>
          <IconButton onClick={logout}>
            <Avatar className="nav__rightAvatar" src={user.photoURL}>
              {user.displayName[0]}
            </Avatar>
          </IconButton>
        </Tooltip>
      </div>

      <input
        type="file"
        onChange={handleUploadImage}
        ref={fileRef}
        multiple
        accept="image/*"
        style={{ display: "none" }}
      />

      {uploadMessage && (
        <Snackbar
          onClose={() => setUploadMessage(null)}
          autoHideDuration={3000}
          open={Boolean(uploadMessage)}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          message={uploadMessage}
        />
      )}
    </div>
  );
}

export default Nav;

