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
import DashboardComponent from "./components/DashboardComponent";
import ProductsDashboardComponent from "./components/ProductsDashboardComponent";
import UsersDashboardComponent from "./components/UsersDashboardComponent";

const App = () => {
  return (
    <>
      <Router>
        <Route path="/" exact>
          <NavbarComponent />
          <MainComponent />
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

        <Route path="/dashboard" exact>
          <DashboardComponent />
        </Route>

        <Route path="/dashboard/products" exact>
          <ProductsDashboardComponent />
        </Route>

        <Route path="/dashboard/users" exact>
          <UsersDashboardComponent />
        </Route>

        <Route path="/cart/:id?">
          <CartComponent />
        </Route>
      </Router>
    </>
  );
};

export default App;
