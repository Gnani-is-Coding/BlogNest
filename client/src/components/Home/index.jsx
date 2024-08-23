import React from "react";
import Navbar from "../Navbar";
import Tags from "../Tags";
import "./index.css";

function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <Tags />
    </div>
  );
}

export default Home;
