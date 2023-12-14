import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div className="app__header app__bg app__wrapper section__padding" id="home">
    <div className="app__wrapper_info mt-4">
      <SubHeading title="Leather  " />
      <h1 className="app__header-h1">Buff Bags and Diaries</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Duis sed dapibus leo nec ornare diam sed commodo nibh ante facilisis bibendum{" "}
      </p>
      <button type="button" className="custom__button" style={{backgroundColor:"rgb(187,90,70)" ,  borderTopRightRadius:"20px" , borderBottomLeftRadius:"20px"}}>
        Explore More
      </button>
    </div>

    <div className="app__wrapper_img mt-4">
      <img src={images.leather2} alt="header_img" />
    </div>
  </div>
);

export default Header;
