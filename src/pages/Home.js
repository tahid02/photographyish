import React from "react";
import Banner from "../components/home/Banner/Banner";
import Footer from "../components/home/footer/Footer";
import NavigationBar from "../components/home/navigationbar/NavigationBar";
import OurServices from "../components/home/services/OurServices";

const Home = () => {
  return (
    <div>
      <NavigationBar />
      <Banner />
      <OurServices />
      <Footer />
    </div>
  );
};

export default Home;
