import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import EastContainer from "./components/EastContainer";
import WestContainer from "./components/WestContainer";

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={EastContainer} />
        <Route exact path="/east" component={EastContainer} />
        <Route exact path="/west" component={WestContainer} />
      </div>
    </Router>
    )
}

export default App;
