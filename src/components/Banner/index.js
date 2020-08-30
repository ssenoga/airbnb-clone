import React, { useState } from "react";

import "./Banner.css";
import { Button } from "@material-ui/core";
import Search from "../Search";

export default function Banner() {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="banner">
      <div className="banner__search">
        {showSearch && <Search />}
        <Button
          onClick={() => setShowSearch(!showSearch)}
          variant="outlined"
          className="banner__searchButton">
          {showSearch ? "Hide" : "Search Dates"}
        </Button>
      </div>
      <div className="banner__info">
        <h1>Get out and reach your imagination</h1>
        <h5>
          Plan the different kinds of gateawy and discover the gems near you
        </h5>
        <Button variant="outlined">Explore NearBy</Button>
      </div>
    </div>
  );
}
