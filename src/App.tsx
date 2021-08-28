import React, { useState } from "react";
import "./App.css";
import List from "./components/List";

interface IState {
  people: {
    name: string;
    url: string;
    age: number;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Ada Lovelace",
      url: "https://daily.jstor.org/wp-content/uploads/2019/10/ada_lovelace_pioneer_1050x700.jpg",
      age: 36,
      note: "First computer programmer",
    },
  ]);

  return (
    <div className="App">
      <h1>People Invited To My Party</h1>
      <List people={people}/>
    </div>
  );
}

export default App;
