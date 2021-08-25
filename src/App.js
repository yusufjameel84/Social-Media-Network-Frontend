import React from "react";

import Navbar from "./components/layout/navbar";
import Footer from  "./components/layout/footer";
import Landing from "./components/layout/landing";

import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Footer />
    </div>
  );
}

export default App;
