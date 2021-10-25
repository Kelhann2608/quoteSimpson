import React, { useState } from 'react';
import './App.css';
import QuoteCard from './component/quoteCard';
import axios from "axios";
const sampleSimpson ={
  "quote": "Facts are meaningless. You could use facts to prove anything that's even remotely true.",
  "character": "Homer Simpson",
  "image": "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
  "characterDirection": "Right"
  }
function App() {
  const [simpson, setSimpson] = useState(sampleSimpson);
  const getSimpson = () => {
    // Send the request
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes")
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        setSimpson(data[0]);
      });
  };
  return (
    <div className="App">
     <QuoteCard simpson = {simpson} />
     <button type="button" onClick={getSimpson}>
        Quote Simpson
      </button>
    </div>
  );
}

export default App;
