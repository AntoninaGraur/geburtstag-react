import React from 'react';
import "../Home.css";
import Image from "../images/background2.jpg";
import { NavigationLink, Content } from './all.styled';

function Home() {
  return (
    <section style={{ opacity: "0.7" }}>
      <div
        className="hero"
        style={{
          backgroundImage: `url(${Image})`,
        }}
      ></div>
      <Content>
        <NavigationLink to="/album"> Тицьни мене</NavigationLink>
      </Content>
    </section>
  );
}

export default Home;
