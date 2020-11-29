import React, { useState } from "react"; //we bring in the 'useState' hook because we are using a functional component
import axios from "axios";

//since it's a form, we need to have some component state because each input needs to have its own state
//they also needs to have an 'onchange' handler so when we type in it, it updates the state
const Form = () => {
  const [formData, setFormData] = useState({
    //default values go inside here
    name: "",
    color: "",
    meaning: "",
  });

  const { name, color, meaning } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault(); //do this because this is a submit
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ name, color, meaning });
    axios.post("/api/formInfo", body, config);
    window.location.assign("http://localhost:3000/submitted");
  };

  return (
    <div style={{ margin: "5%" }}>
      <h1 className="large text-primary">Please fill out this form:</h1>
      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <label name="name">What is your name?</label>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <label name="color">What is your favorite color?</label>
          <input
            type="text"
            placeholder="Favorite Color"
            name="color"
            value={color}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <label name="meaning">What is the meaning of life?</label>
          <input
            type="text"
            placeholder="The Meaning of Life"
            name="meaning"
            value={meaning}
            onChange={(e) => onChange(e)}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Submit" />
      </form>
    </div>
  );
};

export default Form;
