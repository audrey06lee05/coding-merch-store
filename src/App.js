import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import CartPage from "./pages/CartPage";
import Navbar from "./components/Navbar";

//check components
console.log(HomePage);
console.log(ProductPage);
console.log(AboutPage);
console.log(ContactPage);
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
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/cart" component={CartPage} />
      </Switch>
    </Router>
  );
}

export default App;
