import './App.css';
import Footer from './components/Footer';
import Home from './screens/Home';
import Main1 from './screens/Main1';
import Main2 from './screens/Main2';
import Main3 from './screens/Main3';
import Main4 from './screens/Main4';

function App() {
  return (
    <div className="App">
      <Home />
      <Main1 />
      <Main2 />
      <Main3 />
      <Main4 />
      <Footer />
    </div>
  );
}

export default App;
