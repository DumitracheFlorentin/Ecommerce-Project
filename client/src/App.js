import { BrowserRouter as Router, Route } from "react-router-dom";

// Import css
import "./style/style.css";

// Import components
import NavbarComponent from "./components/NavbarComponent";
import MainComponent from "./components/MainComponent";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact>
          <NavbarComponent />
          <MainComponent />
        </Route>

        <Route path="/cart" exact>
          <NavbarComponent />
        </Route>

        <Route path="/register" exact>
          <NavbarComponent />
        </Route>
      </Router>
    </div>
  );
};

export default App;
