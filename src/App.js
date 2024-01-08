import './App.css';
import NavBar from './Component/NavBar/NavBar';
import Home from './Component/Home/Home';
import Page1 from './Component/Page1/Page1';
import Page2 from './Component/Page2/Page2';
import Page3 from './Component/Page3/Page3';
import Page4 from './Component/Page4/Page4';

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
