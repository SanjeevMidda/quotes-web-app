import { useEffect, useState } from 'react';
import './index.css';

function App() {

  const [quoteInfo, setQuoteInfo] = useState("");

  async function getQuote(){
    let request = await fetch("https://api.quotable.io/quotes/random");
    let response = await request.json();

    setQuoteInfo(response[0])
  }
 

  console.log(quoteInfo);

  //author
  // content
  return (
    <div className="App" onClick={getQuote}>
      <div className="container">
        <nav>
          {/* <h3>QUOTE</h3> */}
          <h3>1702</h3>
          <h3>SANJ.M</h3>
        </nav>

        <div className="quote">
          <h1>{quoteInfo.content}</h1>
          <h2>{quoteInfo.author}</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
