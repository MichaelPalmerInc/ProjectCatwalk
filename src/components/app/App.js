import './App.css';
import Overview from '../overview/Overview.js';
import Questions from '../questions/Questions.js';
import Reviews from '../reviews/Reviews';
import { useState } from 'react';
function App() {
  const [currProduct, setCurrProduct] = useState(21111);
  return (
    <div className="App">
      <Overview productId={currProduct} />
      <Questions productId={currProduct} />
      <Reviews productId={currProduct} />
    </div>
  );
}

export default App;
