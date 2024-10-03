import React, { useEffect, useState } from "react";
import "./Operation.css";
import { useNavigate } from "react-router-dom";

function Addition({ op }) {
  let [number1, setnumber1] = useState(Math.floor(Math.random() * 10) + 1);
  const [number2, setnumber2] = useState(Math.floor(Math.random() * 10) + 1);
  const [score, setScore] = useState(0);
  const [Seconds, setSeconds] = useState(60);
  let answer;

  //Operation

  if (op == "+") answer = number1 + number2;
  else if (op == "-") answer = number1 - number2;
  else if (op == "x") answer = number1 * number2;
  else if (op == "/") {
    number1 *= number2;
    answer = number1 / number2;
  }

  //Navigation

  const navigate = useNavigate();

  //ANSWER

  const handleAnswerChange = (event) => {
    if (event.target.value == answer) {
      setnumber2(Math.floor(Math.random() * 10) + 1);
      setnumber1(Math.floor(Math.random() * 10) + 1);
      setScore(score + 1);
      console.log("Question updated");
      console.log(score);
      event.target.value = "";
    }
  };

  //TIMER

  const deadline = Date.now() + 61000;

  const getTime = () => {
    const time = deadline - Date.now();
    setSeconds(Math.floor(time / 1000));
  };

  if (Seconds == 0) {
    navigate("/score", { state: { score } });
  }

  useEffect(() => {
    const interval = setInterval(() => getTime(), 1000);
    return () => clearInterval(interval);
  }, []);

  //PAGE

  return (
    <div className="addition">
      <div id="timer"> {Seconds}</div>

      <div className="question">
        <div>{number1} </div>
        <div> {op} </div>
        <div> {number2} </div>
      </div>

      <input
        className="answer"
        name="MyInput"
        onChange={handleAnswerChange}
        autoFocus
      />

      <div id="score"> Score : {score}</div>
    </div>
  );
}

export default Addition;
