import HomePage from "./pages/HomePage/HomePage";
import Privacy from "./pages/Privacy/Privacy";
import Terms from "./pages/Terms/Terms";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
