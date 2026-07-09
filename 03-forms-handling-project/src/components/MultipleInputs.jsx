import React, { useState } from "react";

const MultipleInputs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    gender: "",
    acceptedTerms: false,
    favoriteFruit: "",
    comments: "",
  });

  //! General change handler
  const handleChange = (e) => {
    //Get the name, type, value and checked from the input types
    const { name, type, value, checked } = e.target;
    //Update the state
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  //! HandleSubmit
  const handleSubmit = (e) => {
    //Prevent page reloading
    e.preventDefault();
    //Make api
    console.log(formData);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>React Form with multiple input types</h2>
      <div>
        <label>
          Name:
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
          />
        </label>
      </div>
      <br />
      <div>
        <label>
          Email:
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
          />
        </label>
      </div>
      <br />
      <div>
        <label>
          Password:
          <input
            name="password"
            value={formData.password}
            onChange={handleChange}
            type="password"
          />
        </label>
      </div>
      <br />
      <div>
        <label>
          Age:
          <input
            name="age"
            value={formData.age}
            onChange={handleChange}
            type="number"
          />
        </label>
      </div>

      <br />
      <div>
        <label>
          Gender:
          <input
            name="gender"
            value="male"
            onChange={handleChange}
            type="radio"
            checked={formData.gender === "male"}
          />
          Male
        </label>
      </div>
      <br />
      <div>
        <label>
          <input
            name="gender"
            value="female"
            onChange={handleChange}
            checked={formData.gender === "female"}
            type="radio"
          />
          Female
        </label>
      </div>

      <br />
      <div>
        <input
          name="acceptedTerms"
          value={formData.acceptedTerms}
          onChange={handleChange}
          type="checkbox"
        />
        I accept the terms and conditions
      </div>

      <div>
        <label>
          Favorite Fruit:
          <select
            name="favoriteFruit"
            value={formData.favoriteFruit}
            onChange={handleChange}
          >
            <option value="">--Choose---</option>
            <option value="apple">Apple</option>
            <option value="banana">Banana</option>
            <option value="orange">Orange</option>
            <option value="grape">Grape</option>
          </select>
        </label>
      </div>

      <div>
        <label>
          Comment:
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            rows="4"
          />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MultipleInputs;
