import React from "react";
import Hero from "../components/Hero";
import JobListings from "../components/JobListings";
import ViewAll from "../components/ViewAll";
import HomeCards from "../components/HomeCards";

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobListings isHome={true} />
      <ViewAll />
    </>
  );
};

export default HomePage;
