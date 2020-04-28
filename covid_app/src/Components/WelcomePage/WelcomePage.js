import React from "react";
import img1 from "../../Images/1.png";
import img2 from "../../Images/2.png";
import img3 from "../../Images/3.png";
import img4 from "../../Images/4.png";
import img5 from "../../Images/5.png";
import img6 from "../../Images/6.png";
import img7 from "../../Images/7.png";

export default function WelcomePage() {
  return (
    <div className="body">
      <div className="container-fp">
        <div className="box-fp">
          <div className="content-fp">
            <img src={img1} />
            <p>wash hands with soap and water Ever Hour.</p>
          </div>
        </div>
        <div className="box-fp">
          <div className="content-fp">
            <img src={img2} />
            <p>
              Stay away from people who are Coughing and Sneezinf at a Distance
              of 3 metres{" "}
            </p>
          </div>
        </div>
        <div className="box-fp">
          <div className="content-fp">
            <img src={img3} />
            <p>Please stay inside Home and do not Travel to prevent Covid 19</p>
          </div>
        </div>
        <div className="box-fp">
          <div className="content-fp">
            <img src={img4} />
            <p>
              If you have difficulty in breathing have a fever and cough.Seek
              medical care at once
            </p>
          </div>
        </div>
        <div className="box-fp">
          <div className="content-fp">
            <img src={img5} />
            <p>
              Ware a mask if you r travelin or have cough and cold . Please
              dispose the mask after use if possiable
            </p>
          </div>
        </div>
        <div className="box-fp">
          <div className="content-fp">
            <img src={img6} />
            <p>
              Avoide close contact with people and stay Home to support
              Quaratine
            </p>
          </div>
        </div>
        <div className="box-fp">
          <div className="content-fp">
            <img src={img7} />
            <p>Drink plenty of hote water and Properly cooked food</p>
          </div>
        </div>
      </div>
    </div>
  );
}
