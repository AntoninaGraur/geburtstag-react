import React, { useState, useEffect } from "react";
import axios from "axios";
import jsonData from '../data.json';
console.log(jsonData);

function Album() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("../data.json")
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log("Data loading error", err);
      });
  }, []);

  return (
    <div>
      <h1>My Album</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <img src={item.image_url} alt="Personal foto" />
            <p>{item.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Album;
