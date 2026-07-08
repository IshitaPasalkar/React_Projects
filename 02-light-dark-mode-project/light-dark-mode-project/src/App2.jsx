import { useState } from "react";

const App = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => 
    {
    setIsDark(!isDark);
  }

  const lightStyle = {
    backgroundColor: "#ffffff",
    color: "#000000",
    padding: "50px",
    textAlign: "center",
    minHeight: "100vh",
  };

  const darkStyle = {
    backgroundColor: "#111111",
    color: "#ffffff",
    padding: "50px",
    textAlign: "center",
    minHeight: "100vh",
  };

  return(
    <div style={isDark? darkStyle:lightStyle}>
          <h1>{isDark ? "Dark Mode" : "Light Mode"}</h1>
          <p>This is basic theme switcher using useState.</p>
          <button onClick={toggleTheme}>
        Switch to {isDark ? "Light" : "Dark"} Mode
      </button>
    </div>
  )
};

export default App;