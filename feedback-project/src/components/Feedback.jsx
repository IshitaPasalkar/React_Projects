import React, { useState } from "react";

function Feedback() {

  const [name, setName] = useState("");


  const [message, setMessage] = useState("");

  
  const [submitted, setSubmitted] = useState(false);

  
  const handleSubmit = (e) => {
    e.preventDefault();

   
    if (name.trim() === "") {
      alert("Please enter your name.");
      return;
    }

   
    setSubmitted(true);
  };

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "40px auto",
        padding: "20px",
        fontFamily: "Arial",
      }}
    >
      <h2>Feedback Project</h2>

      <form onSubmit={handleSubmit}>
    
        <div style={{ marginBottom: "15px" }}>
          <label>Name: </label>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              padding: "6px",
              width: "220px",
            }}
          />
        </div>

       
        <div style={{ marginBottom: "15px" }}>
          <label>Message: </label>

          <br />

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="5"
            cols="35"
            style={{
              marginTop: "5px",
              padding: "6px",
            }}
          ></textarea>
        </div>

       
        <button
          type="submit"
          style={{
            padding: "8px 15px",
            cursor: "pointer",
          }}
        >
          Submit Feedback
        </button>
      </form>

  
      {submitted && (
        <div
          style={{
            marginTop: "30px",
            padding: "15px",
            backgroundColor: "#f2f2f2",
            borderRadius: "8px",
          }}
        >
          <h3>Feedback Received</h3>

          <p>
            <strong>Name:</strong> {name}
          </p>

          <p>
            <strong>Message:</strong> {message}
          </p>
        </div>
      )}
    </div>
  );
}

export default Feedback;