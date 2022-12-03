import React from "react";
import "./Home.css";
import Nav from "../components/Nav";
import MainTitle from "../components/MainTitle";

function Home() {
  return (
    <div className="wrapper">
      <Nav />
      <div className="content">
        <MainTitle />
      </div>
    </div>
  );
}

export default Home;
