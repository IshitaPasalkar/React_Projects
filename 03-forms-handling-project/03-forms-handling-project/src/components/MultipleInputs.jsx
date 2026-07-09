import { useState } from "react";

const MultipleInputs = () => {

    // One object stores all form values
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

    // One function handles every input
    const handleChange = (e) => {

        const { name, value, type, checked } = e.target;

        setFormData({
            ...formData,

            [name]:
                type === "checkbox"
                    ? checked
                    : value,
        });
    };

    // Submit
    const handleSubmit = (e) => {

        e.preventDefault();

        console.log(formData);

        alert("Form Submitted!");
    };

    return (

        <form onSubmit={handleSubmit}>

            <h1>React Forms with Multiple Inputs</h1>

            <br />

            <label>
                Name:
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
            </label>

            <br /><br />

            <label>
                Email:
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </label>

            <br /><br />

            <label>
                Password:
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
            </label>

            <br /><br />

            <label>
                Age:
                <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                />
            </label>

            <br /><br />

            Gender:

            <label>
                <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={formData.gender === "Male"}
                    onChange={handleChange}
                />
                Male
            </label>

            <label style={{ marginLeft: "20px" }}>
                <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={formData.gender === "Female"}
                    onChange={handleChange}
                />
                Female
            </label>

            <br /><br />

            <label>

                <input
                    type="checkbox"
                    name="acceptedTerms"
                    checked={formData.acceptedTerms}
                    onChange={handleChange}
                />

                I accept Terms & Conditions

            </label>

            <br /><br />

            <label>

                Favourite Fruit

                <select
                    name="favoriteFruit"
                    value={formData.favoriteFruit}
                    onChange={handleChange}
                >

                    <option value="">--Choose--</option>

                    <option value="Apple">Apple</option>

                    <option value="Banana">Banana</option>

                    <option value="Orange">Orange</option>

                </select>

            </label>

            <br /><br />

            <label>

                Comments

                <br />

                <textarea
                    rows="4"
                    name="comments"
                    value={formData.comments}
                    onChange={handleChange}
                />

            </label>

            <br /><br />

            <button type="submit">

                Submit

            </button>

        </form>
    );
};

export default MultipleInputs;