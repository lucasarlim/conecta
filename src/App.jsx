import { BrowserRouter as Router } from "react-router-dom";
import { Home } from "./pages/Home";
import { Routes } from "./Routes";

function App() {
  return (
    <Router>
      <Home />
      <Routes />
    </Router>
  );
}

export default App;
