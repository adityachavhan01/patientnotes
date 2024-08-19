import './App.css';


import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './screens/Home';
import Pricing from './screens/Pricing';
import Session from './screens/Session'

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pricing" element={<Session />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
