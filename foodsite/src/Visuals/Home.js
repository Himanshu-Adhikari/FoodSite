import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carousal from "../components/Carousal";
function Home() {
  return (
    <>
      <div>
        <div>
          <Nav />
        </div>
        <div>
          <Carousal></Carousal>
        </div>
        <div className="m-3">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
