import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Album() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/src/data.json').then(response => {
      setData(response.data)
      
    }).catch(err => {
    console.log("Data loading error", err);
  })
}, [])

  return (
    <div>
      <h1>My Album</h1>
    </div>
  )
}

export default Album;


