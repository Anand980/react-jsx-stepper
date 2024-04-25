import React from "react";
import "./styles.css";
import Stepper from "./Components/Stepper";

export default function App() {
  const checkoutSteps = [
    { name: "Customer Info", info: "Enter Customer Info" },
    { name: "Shipping Info", info: "" },
    { name: "Payment", info: "Select Payment method" },
    { name: "Delievery", info: "Estimated Delivery" },
  ];
  return (
    <div className="App">
      <Stepper steps={checkoutSteps} />
    </div>
  );
}
