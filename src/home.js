import React from 'react';
import "./Home.css";
import Image from "./images/background2.jpg";

function Home() {
  return (
    <section style={{ opacity: "0.7" }}>
      <div
        className="hero"
        style={{
          backgroundImage: `url(${Image})`,
        }}
      ></div>{" "}
      <div className="content">
        <button type="submit"> Тицьни мене</button>
      </div>
    </section>
  );
}

export default Home;
