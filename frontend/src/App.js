import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import webfont from "webfontloader";
import { React, useEffect } from "react";
import Header from "./component/layout/Header/Header";
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home";

function App() {
  useEffect(() => {
    webfont.load({
      google: {
        families: ["Roboto"],
      },
    });
  }, []);

  return (
    <Router>
      <Header />
      <Route exact path={"/"} component={Home} />

      <Footer />
    </Router>
  );
}

export default App;
