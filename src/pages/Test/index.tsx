import React, { useState } from "react";
import "./Test.scss";

const TestPage: React.FC = () => {
  const [side1, setSide1] = useState("");
  const [side2, setSide2] = useState("");
  const [side3, setSide3] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    switch (name) {
      case "side1":
        setSide1(value);
        break;
      case "side2":
        setSide2(value);
        break;
      case "side3":
        setSide3(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="triangle">
      <input
        type="number"
        name="side1"
        placeholder="Side 1"
        value={side1}
        onChange={handleChange}
      />
      <input
        type="number"
        name="side2"
        placeholder="Side 2"
        value={side2}
        onChange={handleChange}
      />
      <input
        type="number"
        name="side3"
        placeholder="Side 3"
        value={side3}
        onChange={handleChange}
      />
    </div>
  );
};

export default TestPage;
