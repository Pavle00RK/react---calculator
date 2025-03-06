import { useState } from "react";
import "./App.css";
import { Top } from "./Top";
import { Down } from "./Down";

function App() {
  const [input, setInput] = useState(""); // Čuva trenutno unet izraz

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setInput(eval(input)); // Izračunaj izraz (PAŽNJA: eval nije najsigurnije rešenje)
      } catch {
        setInput("Error");
      }
    } else if (value === "C") {
      setInput(""); // Resetuje unos
    } else {
      setInput((prev) => prev + value); // Dodaje kliknutu vrednost
    }
  };

  return (
    <div className="App">
      <div className="Omotac">
        <Top input={input} />
        <Down handleClick={handleClick} />
      </div>
    </div>
  );
}

export default App;
