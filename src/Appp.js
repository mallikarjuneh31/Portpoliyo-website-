import React, { useState, useEffect, useMemo } from "react";
import "./App.css";

function App() {
  const roles = useMemo(
    () => ["Frontend Developer", "React Developer", "MERN Stack Developer"],
    []
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === roles.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [roles]);

  return (
    <div className="App">
      <h1>Hello, I'm Mallikarjun 👋</h1>
      <h2>{roles[currentIndex]}</h2>
    </div>
  );
}

export default App;