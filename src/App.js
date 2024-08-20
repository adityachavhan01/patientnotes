import './App.css';


import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './screens/Home';
import Session from './screens/Session'
import Dictate from './screens/Dictate';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pricing" element={<Session />} />
            <Route path="/dictate" element={<Dictate />} />

          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
