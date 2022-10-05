import React from "react";
import Home from "./Containers/Home.container";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Containers/Header.container";
import Product from "./Containers/Product.container";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Routes>
            <Route path="/" element={<Header />}>
              <Route index element={<Home />}></Route>
              <Route path=":category" element={<Home />}></Route>
              <Route path=":category/product/:id" element={<Product />}></Route>
            </Route>
          </Routes>
        </Router>
      </>
    );
  }
}
export default App;
