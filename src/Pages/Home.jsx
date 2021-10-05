import React from "react";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import CardItems from "../components/CardItems";
import "./styles/Home.css";
function Home(props) {
  return (
    <div className="home">
      <Navbar setloggedIn={props.setloggedIn} />
      <Banner />
      <CardItems />
    </div>
  );
}
export default Home;
