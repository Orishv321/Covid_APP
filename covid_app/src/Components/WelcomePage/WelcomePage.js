import React from "react";
import img1 from "../../Images/Gif/1.gif";
import img2 from "../../Images/2.png";
import img3 from "../../Images/3.png";
import img4 from "../../Images/4.png";
import img5 from "../../Images/5.png";
import img6 from "../../Images/6.png";
import img7 from "../../Images/7.png";

export default function WelcomePage() {
  return (
    <div>
      <div className="row">
        <div className="col s4">
          <img class="materialboxed" width="400" src={img1} />
        </div>
        <div className="col s4">
          <img class="materialboxed" width="400" src={img1} />
        </div>
      </div>
    </div>
  );
}
