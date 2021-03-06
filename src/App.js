import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import Navbar from "./components/layout/navbar";
import Footer from  "./components/layout/footer";
import Landing from "./components/layout/landing";

import './App.css';
import Register from "./components/auth/register";
import Login from "./components/auth/login";


function App() {
  return (
    <Provider store = {store}>
      <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={ Landing } />
        <div className="container">
          <Route exact path="/register" component={ Register } />
          <Route exact path="/login" component={ Login } />
        </div>
        <Footer />
      </div>
      </Router>
    </Provider>
  );
}

export default App;
