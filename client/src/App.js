import { BrowserRouter as Router, Route } from "react-router-dom";

// Import css
import "./style/style.css";

// Import components
import NavbarComponent from "./components/NavbarComponent";
import MainComponent from "./components/MainComponent";
import RegisterComponent from "./components/RegisterComponent";
import LoginComponent from "./components/LoginComponent";
import ProductPageComponent from "./components/ProductPageComponent";
import CartComponent from "./components/CartComponent";
import AccountComponent from "./components/AccountComponent";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact>
          <NavbarComponent />
          <MainComponent />
        </Route>

        <Route path="/cart" exact>
          <CartComponent />
        </Route>

        <Route path="/register" exact>
          <NavbarComponent />
          <RegisterComponent />
        </Route>

        <Route path="/login" exact>
          <LoginComponent />
        </Route>

        <Route path="/account">
          <AccountComponent />
        </Route>

        <Route path="/products/:id">
          <ProductPageComponent />
        </Route>
      </Router>
    </div>
  );
};

export default App;
