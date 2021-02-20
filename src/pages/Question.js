import React, { useState } from "react";
import TestButton from "./TestButton";
import questions from "./questions";
import SubmitButtton from "./SubmitButton";

function Question() {
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState("");

  const onClick = (event) => {
    setAnswers((prevAnswers) => [...prevAnswers, event.target.value]);
  };

  const results = {
    extrovert: ["true", "true", "true", "true", "true"],
    introvert: ["false", "false", "false", "false", "false"],
  };

  let arr = [];

  function getArray(arr) {
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].answer === results.introvert[i]) {
        counter++;
      }
    }
    return counter === 5 ? setResult("Introvert") : setResult("Extrovert");
  }

  return (
    <div>
      {questions.map((question, index) => {
        return (
          <div>
            <li key={index}>{question.question}</li>
            <button
              onClick={(e) => (
                (question.answer = e.target.value), console.log(question)
              )}
              value="false"
            >
              FALSE
            </button>
            <button
              onClick={(e) => (
                (question.answer = e.target.value), console.log(question)
              )}
              value="neutral"
            >
              NEUTRAL
            </button>
            <button
              onClick={(e) => (
                (question.answer = e.target.value), console.log(question)
              )}
              value="true"
            >
              TRUE
            </button>
            {}
          </div>
        );
      })}
      <button onClick={() => getArray(questions)}>SUBMIT</button>
      <div>You are an: {result}</div>
    </div>
  );
}

export default Question;
