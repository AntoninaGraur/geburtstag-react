import React from "react";

import { Image, ImageList, SecondNavLink } from "./all.styled";

import Image1 from "../images/20190110_205510.jpg";
import Image2 from "../images/20190303_173238.jpg";
import Image3 from "../images/20181110_205839.jpg";
import Image4 from "../images/20190321_201921.jpg";
import Image5 from "../images/20190802_141112.jpg";
import Image6 from "../images/IMG_20200623_152125.jpg";
import Image7 from "../images/IMG_20201021_181507.jpg";
import Image8 from "../images/IMG_20220415_180714_Bokeh.jpg";
import Image9 from "../images/IMG-74fda3059f124401fecd5f4a830ab43a-V.jpg";
import Image10 from "../images/P1020291.JPG";


function Album() {
  return (
    <div style={{ backgroundColor: "#d8fbcf", padding: "45px" }}>
      <div>
        <h1
          style={{
            color: "#ac1f94",
            fontSize: "45px",
            fontWeight: "bolder",
            textAlign: "center",
          }}
        >
          Наші щасливі моменти
        </h1>
        <ImageList>
          <li>
            <Image src={Image1} alt="Personal foto" />
          </li>
          <li>
            <Image src={Image2} alt="Personal foto" />
          </li>
          <li>
            <Image src={Image3} alt="Personal foto" />
          </li>
          <li>
            <Image src={Image4} alt="Personal foto" />
          </li>
          <li>
            <Image src={Image5} alt="Personal foto" />
          </li>
          <li>
            <Image src={Image6} alt="Personal foto" />
          </li>
          <li>
            <Image src={Image7} alt="Personal foto" />
          </li>
          <li>
            <Image src={Image8} alt="Personal foto" />
          </li>
          <li>
            <Image src={Image9} alt="Personal foto" />
          </li>
          <li>
            <Image src={Image10} alt="Personal foto" />
          </li>
        </ImageList>
      </div>
      <div
        style={{
          padding: "15px",
          textAlign: "center",
          alignItems: "center",
          borderRadius: "30px",
          backgroundColor: "#dce10ec4",
          display: "flex",
          margin: "0 auto",
          width: "1000px",
        }}
      >
        <h2
          style={{
            color: "#ac1f94",
            fontSize: "45px",
            fontWeight: "bolder",
            textAlign: "center",
          }}
        >
          Ти дивовижна жінка, подруга, мама, бабця, тітка, сестра
        </h2>
      </div>
      <SecondNavLink to="/album2"> Тицяй далі</SecondNavLink>
    </div>
  );
}

export default Album;
