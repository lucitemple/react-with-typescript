import React, { useState } from "react";
import "./App.css";
import List from "./components/List"

interface IState {
  people: {
    name: string;
    url: string;
    age: number;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([]);

  return (
    <div className="App">
      <h1>People Invited To My Party</h1>
      <List people={people}/>
    </div>
  );
}

export default App;
