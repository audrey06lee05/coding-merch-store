import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import Navbar from "./components/Navbar";

//check components
console.log(HomePage);
console.log(ProductPage);
console.log(CartPage);
console.log(Navbar);

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/product/:id" component={ProductPage} />{" "}
        {/* id for specifying multiple products*/}
        <Route path="/cart" component={CartPage} />
      </Switch>
    </Router>
  );
}

export default App;
