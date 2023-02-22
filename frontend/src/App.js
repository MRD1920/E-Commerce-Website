import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import webfont from "webfontloader";
import { React, useEffect } from "react";
import Header from "./component/layout/Header/Header";

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
    </Router>
  );
}

export default App;
