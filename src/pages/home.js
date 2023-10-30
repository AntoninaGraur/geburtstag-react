import React from 'react';
import "../Home.css";
import Image from "../images/background2.jpg";
import { NavigationLink } from './all.styled';

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
        <NavigationLink type="submit"> Тицьни мене</NavigationLink>
      </div>
    </section>
  );
}

export default Home;
