import "./styles.css";
import { useState, useEffect } from "react";

const App = () => {
  const [name, setName] = useState("friend");
  const [personType, setPersonType] = useState("lovely");

  const reactions = {
    morning: "Awesome! ☀️",
    afternoon: "Fantastic! 😎",
    evening: "Amazing! 🌙"
  };

  // experiment with useEffect here!

  // useEffect (() => {
  //   console.log("hello")
  // });  <-------------------------  No dependency array will cause the effect to run everytime the component re-renders. Rarely used

  // useEffect (() => {
  //   console.log("hello world")
  // }, []); <----------------------  Empty dependency array will make sure the effect only runs on the initial rendering of the component

  useEffect (() => {
    console.log("hello world!")
  }, [personType]); // <------------  Putting a stateful value in the array will cause the effect to run each time the value changes

  return (
    <div className="App">
      <div className="form-element">
        <label htmlFor="name" />
        Name:
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-element">
        <label htmlFor="personType" />
        Select a person type:
        <select
          id="personType"
          type="text"
          value={personType}
          onChange={(e) => setPersonType(e.target.value)}
        >
          <option value="lovely">Choose one!</option>
          <option value="morning">morning</option>
          <option value="afternoon">afternoon</option>
          <option value="evening">evening</option>
        </select>
        <h1>Hello there, {name}!</h1>
        <h3>
          You are{" "}
          {personType === "morning" || personType === "lovely" ? "a" : "an"}{" "}
          {personType} person. {reactions[personType]}
        </h3>
        <p>
          Update the name and then have a look at the console for the result of
          the useEffect call. :)
        </p>
      </div>
    </div>
  );
};

export default App;
