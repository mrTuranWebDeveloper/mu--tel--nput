import './App.css';
import { MuiTelInput } from "mui-tel-input";
import { useState } from "react";

export default function App() {
  const [value, setValue] = useState("");

  const handleChange = (value) => {
    setValue(value);
    console.log(value);
  };

  return (
    <div className="App">
      <h1>Mui Tel Input</h1>
      <MuiTelInput defaultCountry="FR" onChange={handleChange} value={value} />
    </div>
  );
}


