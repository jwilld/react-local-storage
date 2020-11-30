import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "../../styles.css";

const Form = () => {
  const [value, setValue] = useState(
    localStorage.getItem("myValueInLocalStorage") || ""
  );
  useEffect(() => {
    localStorage.setItem("myValueInLocalStorage", value);
  }, [value]);

  const onChange = (event) => {
    localStorage.setItem("myValueInLocalStorage", event.target.value);
    setValue(event.target.value);
  };
  return (
    <div>
      <h1>Using local storage with React</h1>
      <p>Type something below and refresh the page.</p>
      <div className="input-container">
        <input value={value} type="text" onChange={onChange} />
        <p>{value}</p>
      </div>
    </div>
  );
};

export default Form;

const wrapper = document.getElementById("container");
ReactDOM.render(<Form />, wrapper);
