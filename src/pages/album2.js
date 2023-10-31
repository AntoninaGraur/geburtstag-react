import React from 'react';

import { Image2, ImageList, SecondNavLink } from "./all.styled";

import Image11 from "../images/20181110_182653.jpg";
import Image12 from "../images/20181110_194832.jpg";
import Image13 from "../images/20190428_182825.jpg";
import Image14 from "../images/IMAG1022.jpg";
import Image15 from "../images/IMAG1060.jpg";
import Image16 from "../images/IMAG1871.jpg";
import Image17 from "../images/IMAG1969.jpg";
import Image18 from "../images/IMAG2644.jpg";
import Image19 from "../images/IMG_20190617_121951.jpg";
import Image20 from "../images/IMG_20200826_155317.jpg";
import Image21 from "../images/IMG_20210605_143633_Bokeh.jpg";
import Image22 from "../images/IMG_20230712_181142.jpg";
import Image23 from "../images/IMG_20230715_185501.jpg";
import Image24 from "../images/IMG_20230712_171731.jpg";
import Image25 from "../images/IMG-4c7c251979b05d826b1daa2953ddee0c-V.jpg";
import Image26 from "../images/IMG-c1e0c9e93426a1232d0b0ce030429fb6-V.jpg";

function Album2() {
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
            <Image2 src={Image11} alt="Personal foto" />
          </li>
          <li>
            <Image2 src={Image12} alt="Personal foto" />
          </li>
          <li>
            <Image2 src={Image13} alt="Personal foto" />
          </li>
          <li>
            <Image2 src={Image14} alt="Personal foto" />
          </li>
          <li>
            <Image2 src={Image15} alt="Personal foto" />
          </li>
          <li>
            <Image2 src={Image16} alt="Personal foto" />
          </li>
          <li>
            <Image2 src={Image17} alt="Personal foto" />
          </li>
          <li>
            <Image2 src={Image18} alt="Personal foto" />
          </li>
          <li>
            <Image2 src={Image19} alt="Personal foto" />
          </li>
          <li>
            <Image2 src={Image20} alt="Personal foto" />
          </li>
          <li>
            <Image2 src={Image21} alt="Personal foto" />
          </li>
          <li>
            <Image2 src={Image22} alt="Personal foto" />
          </li>
          <li>
            <Image2 src={Image23} alt="Personal foto" />
          </li>
          <li>
            <Image2 src={Image24} alt="Personal foto" />
          </li>
          <li>
            <Image2 src={Image25} alt="Personal foto" />
          </li>
          <li>
            <Image2 src={Image26} alt="Personal foto" />
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
          Ти турботлива, весела, чарівна, відданна
        </h2>
      </div>
      <SecondNavLink to="/album3"> Тицяй далі</SecondNavLink>
    </div>
  );
}

export default Album2;
