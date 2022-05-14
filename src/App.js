import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./css/App.scss";
import Nav from "./components/Nav.js";
import Login from "./components/Login.js";
import HomePage from "./pages/HomePage.js";
import AlbumPage from "./pages/AlbumPage.js";
import Landing from "./pages/LandingPage"



function App() {
  const user = useSelector((state) => state.user);
  return (
    <div className="app">
      <Router>
        {user ? (
          <>
            <Nav />
            <Routes>
              <Route exact path="/home" element={<HomePage />} />
              <Route exact path="/album/:albumName" element={<AlbumPage />} />
            </Routes>
          </>
        ) : (
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route exact path="/login" element={<Login />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;

