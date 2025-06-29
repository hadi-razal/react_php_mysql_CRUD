import React, { useState } from "react";

const Hero = () => {
  const [result, setResult] = useState();
  const formData = new FormData();
  formData.append("name", "Hello");

  const request = async () => {
    const response = await fetch("http://localhost:3000/php/server.php", {
      method: "POST",
      body:FormData,
    });
  const result = await response.text(); // Get response as plain text
  console.log(result);
  setResult(result); // Assuming setResult is a React state setter
};

  return (
    <div>
      <h1>You Daily Partner for Todo app</h1>

      <button onClick={request}>TEst Button</button>

      <h1>{result}</h1>
    </div>
  );
};

export default Hero;
