import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import Jobs from "./components/JobListings";
import View from "./components/ViewAll";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeCards />
      <Jobs />
      <View />
    </>
  );
};
export default App;
