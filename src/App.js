import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import Home from './Home';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <Page1/>
      <Page2/>
      <Page3/>
      <Page4/>
    </div>
  );
}

export default App;
