import React, { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  // const [test, setTest] = useState({ name: "Towhid" });
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) {
      // setStep(step - 1);  //bad practice
      setStep((s) => s - 1); //good practice
    }
  }
  function handleNext() {
    if (step < 3) {
      // setStep(step + 1);  //bad practice because it will not update the state based on current data
      // setStep(step + 1);  //it will not update twice though we did the same thing again.

      setStep((s) => s + 1); //good practice because it will update the state based on current data.
      // setStep((s) => s + 1); //it will update twice as we did the same thing again.
    }
    // setTest({ name: "Zaman" });
  }

  return (
    <>
      <div className="openClose">
        {!isOpen ? (
          <>
            <button className="open" onClick={() => setIsOpen(!isOpen)}>
              open
            </button>
            <button
              className="close"
              disabled
              onClick={() => setIsOpen(!isOpen)}
            >
              close
            </button>
          </>
        ) : (
          <>
            <button
              className="open"
              disabled
              onClick={() => setIsOpen(!isOpen)}
            >
              open
            </button>
            <button className="close" onClick={() => setIsOpen(!isOpen)}>
              close
            </button>
          </>
        )}
      </div>
      {isOpen && (
        <div className="steps">
          <div className="num">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="msg">
            Step: {step}: {messages[step - 1]}
            {/* {test.name} */}
          </p>
          <div className="buttons">
            <button onClick={handlePrevious}>Previous</button>
            <button onClick={handleNext}>Next</button>
          </div>
        </div>
      )}
    </>
  );
}
