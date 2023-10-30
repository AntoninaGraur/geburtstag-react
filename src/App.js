
import './App.css';
import Image from './images/background2.jpg'

function App() {
  return (
    <section className='hero' style={{backgroundImage:`url(${Image})`}}>
      <div className='content' >
        <h1>З днем народження!!!</h1>
        <a href='#'> Тицяй</a>
      </div>
    </section>
   
  );
}

export default App;
