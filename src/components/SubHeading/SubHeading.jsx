import React from "react";

import { images } from "../../constants";

const SubHeading = ({ title }) => (
  <div style={{ marginBottom: "1rem" }}>
    <p className="p__cormorant">{title}</p>
    <img src={images.leatherbook} alt="spoon_image" className="spoon__img"  style={{width:"90px" }}/>
  </div>
);

export default SubHeading;  