import {useEffect, useState} from "react";
import NavBar from "./Components/NavBar";

import {RootRouter} from "./utils/router";

import './App.css';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api')
      .then((res) => res.json()
        .then((data) => setData(data.message)));
  }, []);

  return (
    <div>
      <RootRouter />
    </div>
  );
}

export default App;
