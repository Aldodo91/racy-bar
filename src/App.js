import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Menu from "./pages/menu";
import MenuDetails from "./pages/menuDetails";
import Logo from "./components/logo";

function App() {
  return (
    <Router>
      <div className="App" id="outer-container">
        <Logo />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu-details/:lang" element={<MenuDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
