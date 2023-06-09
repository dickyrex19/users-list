import Home from "./components/Home";
import Add from "./components/Add";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/create" element={<Add />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
