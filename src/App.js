import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./App.css";
import Card from "./Card";

function App() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const url = `https://fakerapi.it/api/v1/persons?_quantity=5`;

    Axios(url)
      .then((res) => {
        console.log(res.data.data);
        setPeople(res?.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="flex justify-center">
        <h1>Cool hover card animation</h1>
      </div>
      <div className="container">
        <Card people={people} />
      </div>
    </>
  );
}

export default App;
