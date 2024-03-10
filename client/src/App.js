import {useEffect, useState} from "react";
import NavBar from "./Components/NavBar";

import {RootRouter} from "./utils/router";

import './App.css';

function App() {

  return (
    <div className="App">
      <RootRouter />
    </div>
  );
}

export default App;
