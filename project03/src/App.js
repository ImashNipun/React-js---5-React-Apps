import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Slider from './components/Slider';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className='all-cont'>
      <Hero/>
      <Slider/>
      </div>
    </div>
  );
}

export default App;
