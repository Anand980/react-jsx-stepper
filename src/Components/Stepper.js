import React, { useState, useRef, useEffect } from "react";

const Stepper = (props) => {
  const [curStep, setCurStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);
  //const stepref = useRef([]);
  const nextStep = () => {};

  // useEffect(() => {}, [stepRef.current]);

  const handleNext = () => {
    setCurStep((prevStep) => {
      if (prevStep == props.steps.length) {
        setIsComplete(true);
        return prevStep;
      } else {
        return prevStep + 1;
      }
    });
  };

  const calculatewidth = () => {
    return ((curStep - 1) / (props.steps.length - 1)) * 100;
  };
  return (
    <>
      <div className="stepper">
        {props.steps.map((step, index) => {
          return (
            <div
              //ref={(e) => (stepRef.current[index] = el)}
              className={`step ${
                curStep > index + 1 || isComplete ? "complete" : ""
              } ${curStep == index + 1 ? "active" : ""}`}
              key={step.name}
            >
              <div className="stepnum">
                {curStep > index + 1 || isComplete ? <span>✔</span> : index + 1}
              </div>
              <div className="stepname">{step.name}</div>
            </div>
          );
        })}
        <div className="progressbar">
          <div
            className="progress"
            style={{ width: calculatewidth() + "%" }}
          ></div>
        </div>
      </div>

      {!isComplete && (
        <button className="btn" onClick={handleNext}>
          {curStep === props.steps.length ? "Finish" : "Next"}
        </button>
      )}
    </>
  );
};

export default Stepper;
