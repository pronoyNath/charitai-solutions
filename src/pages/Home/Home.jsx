import React from "react";
import Banner from "./Banner";
import Sponsors from "./Sponsors";
import Solutions from "./Solutions";

const Home = () => {
  return (
    <div className="py-24 px-10">
      <Banner />
      <Sponsors />
      <Solutions />
    </div>
  );
};

export default Home;
