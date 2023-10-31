import React from 'react';


import { Image3, ImageList, SecondNavLink } from "./all.styled";

import Image27 from "../images/IMG-f306ea708e07cbef0716ddf0e94501a3-V.jpg";
import Image28 from "../images/received_234804240777734.jpeg";
import Image29 from "../images/IMG-646a1c38c0fa88f8bda9e0495b8c5d7e-V.jpg";
import Image30 from "../images/IMG-36dae4044976ac88cf927ee6dd8fd128-V.jpg";
import Image31 from "../images/IMG-63a9901352350fe017a61d216c32fc0f-V.jpg";
import Image32 from "../images/IMG-68bf41f8017c65f46d00edd4c64846fe-V.jpg";
import Image33 from "../images/IMG-74a44df78531918913f6633ffc74e0f8-V.jpg";
import Image18 from "../images/IMAG2644.jpg";
import Image19 from "../images/IMG_20190617_121951.jpg";
import Image20 from "../images/IMG_20200826_155317.jpg";
import Image21 from "../images/IMG_20210605_143633_Bokeh.jpg";
import Image22 from "../images/IMG_20230712_181142.jpg";
import Image23 from "../images/IMG_20230715_185501.jpg";
import Image24 from "../images/IMG_20230712_171731.jpg";
import Image25 from "../images/IMG-4c7c251979b05d826b1daa2953ddee0c-V.jpg";
import Image26 from "../images/IMG-c1e0c9e93426a1232d0b0ce030429fb6-V.jpg";


function Album3() {
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
            <Image3 src={Image27} alt="Personal foto" />
          </li>
          <li>
            <Image3 src={Image28} alt="Personal foto" />
          </li>
          <li>
            <Image3 src={Image29} alt="Personal foto" />
          </li>
          <li>
            <Image3 src={Image30} alt="Personal foto" />
          </li>
          <li>
            <Image3 src={Image31} alt="Personal foto" />
          </li>
          <li>
            <Image3 src={Image32} alt="Personal foto" />
          </li>
          <li>
            <Image3 src={Image33} alt="Personal foto" />
          </li>
          <li>
            <Image3 src={Image18} alt="Personal foto" />
          </li>
          <li>
            <Image3 src={Image19} alt="Personal foto" />
          </li>
          <li>
            <Image3 src={Image20} alt="Personal foto" />
          </li>
          <li>
            <Image3 src={Image21} alt="Personal foto" />
          </li>
          <li>
            <Image3 src={Image22} alt="Personal foto" />
          </li>
          <li>
            <Image3 src={Image23} alt="Personal foto" />
          </li>
          <li>
            <Image3 src={Image24} alt="Personal foto" />
          </li>
          <li>
            <Image3 src={Image25} alt="Personal foto" />
          </li>
          <li>
            <Image3 src={Image26} alt="Personal foto" />
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

export default Album3
