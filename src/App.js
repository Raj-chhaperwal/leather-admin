import React from "react";

import {
  Chef,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,
  Laurels,
  SpecialMenu,
} from "./container";
import { Navbar } from "./components";
import "./App.css";


const App = () => (
  <div>
    <Navbar />
    <Header />
    <Gallery />
    {/* <AboutUs /> */}
    {/* <SpecialMenu /> */}
    {/* <Chef /> */}
    {/* <Intro /> */}
    {/* <Laurels /> */}
    <FindUs />
    <Footer />
  </div>
);

export default App;
