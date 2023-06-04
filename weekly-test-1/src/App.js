import './App.css';
import Nav from './components/Nav';
import Feature from './components/Feature';
import Features from './components/Features';
import Icons from './components/Icons';
import Gallery from './components/Gallery'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Feature/>
      <Features/>
      <Icons/>
      <Gallery/>
    </div>
  );
}

export default App;
