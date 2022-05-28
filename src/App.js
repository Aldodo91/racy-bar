import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Menu from "./pages/menu";
import MenuDetails from "./pages/menuDetails";
import Logo from "./components/logo";

function App() {
  return (
    <Router>
      <div className="App">
        <Logo />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/menu" exact>
            <Menu />
          </Route>
          <Route path="/menu-details/:lang" exact children={<MenuDetails />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
