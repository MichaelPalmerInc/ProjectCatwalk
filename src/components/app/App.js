import './App.css';
import Overview from '../overview/Overview.js';
import Questions from '../questions/Questions.js';
import Reviews from '../reviews/Reviews';
function App() {
  return (
    <div className="App">
      <Overview />
      <Questions />
      <Reviews />
    </div>
  );
}

export default App;
