import React from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";

const Home = () => {
  return (
    <div className="home">
      <Banner />

      <div className="home__section">
        <Card />
        <Card />
        <Card />
      </div>

      <div className="home__section">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Home;
