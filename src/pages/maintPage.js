import React from "react";
import download from "../img/download.png";
const MaintPage = () => {
  return (
    <div>
      <img id="img360" src={download} alt="" />
      <h1>Sorry we're down for maintenance.</h1>
      <h2>We'll be back shortly.</h2>
    </div>
  );
};

export default MaintPage;
