import { useState } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline bg-orange-300">
        Hello world!
        <Header />
        <Home />
        <Footer />
      </h1>
    </>
  );
}

export default App;
