"use client";

import { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value: string) => {
    if (value === "=") {
      calculateResult();
    } else if (value === "C") {
      setInput("");
      setResult("");
    } else if (value === "CE") {
      setInput(input.slice(0, -1));
    } else if (value === "1/x") {
      handleReciprocal();
    } else if (value === "x^2") {
      handleSquare();
    } else if (value === "√x") {
      handleSquareRoot();
    } else if (value === "+/-") {
      handleSignChange();
    } else {
      setInput(input + value);
    }
  };
  const handleReciprocal = () => {
    console.log("input", input);
    if (input !== "") {
      const operators = "+-*/%/";
      // Kiểm tra nếu input chứa bất kỳ phép toán nào
      const containsOperator = operators.split("").some((op) => input.includes(op));
      console.log("🚀 ~ handleReciprocal ~ containsOperator:", containsOperator);
  
      let valueToReciprocal = input;
      let beforeOperator = "";
  
      if (containsOperator) {
        // Nếu có phép toán, tìm vị trí của phép toán cuối cùng
        const lastOperatorIndex = Math.max(
          input.lastIndexOf("+"),
          input.lastIndexOf("-"),
          input.lastIndexOf("*"),
          input.lastIndexOf("/"),
          input.lastIndexOf("%")
        );
        // Tách số cuối cùng khỏi chuỗi
        valueToReciprocal = input.slice(lastOperatorIndex + 1);
        beforeOperator = input.slice(0, lastOperatorIndex + 1);
      }
  
      console.log("🚀 ~ handleReciprocal ~ valueToReciprocal:", valueToReciprocal);
      console.log("🚀 ~ handleReciprocal ~ beforeOperator:", beforeOperator);
  
      const value = parseFloat(valueToReciprocal);
      if (!isNaN(value) && value !== 0) {
        const reciprocalValue = (1 / value).toString();
        // Cập nhật input với phần trước phép toán và kết quả nghịch đảo
        if (containsOperator) {
          setInput(beforeOperator + reciprocalValue);
        } else {
          setInput(reciprocalValue);
        }
      } else {

      }
    }
  };
  

  const handleSquare = () => {
    console.log("input", input);
    if (input !== "") {
      const operators = "+-*/%/";
      // Kiểm tra nếu input chứa bất kỳ phép toán nào
      const containsOperator = operators
        .split("")
        .some((op) => input.includes(op));
      console.log("🚀 ~ handleSquare ~ containsOperator:", containsOperator);
      let valueToSquare = input;
      let beforeOperator = "";
      if (containsOperator) {
        console.log("cc")
        // Nếu có phép toán, tìm vị trí của phép toán cuối cùng
        const lastOperatorIndex = Math.max(
          input.lastIndexOf("+"),
          input.lastIndexOf("-"),
          input.lastIndexOf("*"),
          input.lastIndexOf("/"),
          input.lastIndexOf("%")
        );
        console.log("🚀 ~ handleSquare ~ lastOperatorIndex:", lastOperatorIndex)
        // Tách số cuối cùng khỏi chuỗi
        valueToSquare = input.slice(lastOperatorIndex + 1);
        beforeOperator = input.slice(0, lastOperatorIndex + 1);
      }
      console.log("🚀 ~ handleSquare ~ valueToSquare:", valueToSquare);
      console.log("🚀 ~ handleSquare ~ valueToSquare1:", beforeOperator)

      
      const value = parseFloat(valueToSquare);
      if (!isNaN(value)) {
        const squaredValue = (value ** 2).toString();
  
        // Cập nhật input với phần trước phép toán, phép toán và kết quả bình phương
        if (containsOperator) {
          setInput(beforeOperator + squaredValue); // Thay thế số sau phép toán bằng kết quả bình phương
        } else {
          setInput(squaredValue); // Nếu không có phép toán, chỉ đơn giản là đặt kết quả vào input
        }
      } else {

      }
    }
  };

  const handleSquareRoot = () => {
    console.log("input", input);
    if (input !== "") {
      const operators = "+-*/%/";
      // Kiểm tra nếu input chứa bất kỳ phép toán nào
      const containsOperator = operators.split("").some((op) => input.includes(op));
      console.log("🚀 ~ handleSquareRoot ~ containsOperator:", containsOperator);
  
      let valueToSquareRoot = input;
      let beforeOperator = "";
  
      if (containsOperator) {
        // Nếu có phép toán, tìm vị trí của phép toán cuối cùng
        const lastOperatorIndex = Math.max(
          input.lastIndexOf("+"),
          input.lastIndexOf("-"),
          input.lastIndexOf("*"),
          input.lastIndexOf("/"),
          input.lastIndexOf("%")
        );
        // Tách số cuối cùng khỏi chuỗi
        valueToSquareRoot = input.slice(lastOperatorIndex + 1);
        beforeOperator = input.slice(0, lastOperatorIndex + 1);
      }
  
      console.log("🚀 ~ handleSquareRoot ~ valueToSquareRoot:", valueToSquareRoot);
      console.log("🚀 ~ handleSquareRoot ~ beforeOperator:", beforeOperator);
  
      const value = parseFloat(valueToSquareRoot);
      if (!isNaN(value) && value >= 0) {
        const squareRootValue = Math.sqrt(value).toString();
        // Cập nhật input với phần trước phép toán và kết quả căn bậc hai
        if (containsOperator) {
          setInput(beforeOperator + squareRootValue);
        } else {
          setInput(squareRootValue);
        }
      } else {

      }
    }
  };
  

  const handleSignChange = () => {
    if (input !== "") {
      const value = parseFloat(input);
      setInput((value * -1).toString());
    }
  };


  const calculateResult = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px" }}>
      <input
        type="text"
        value={input}
        readOnly
        style={{
          width: "100%",
          height: "40px",
          fontSize: "24px",
          textAlign: "right",
          marginBottom: "10px",
        }}
      />
      <input
        type="text"
        value={result}
        readOnly
        style={{
          width: "100%",
          height: "40px",
          fontSize: "24px",
          textAlign: "right",
          marginBottom: "10px",
          color: "red",
        }}
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "10px",
        }}
      >
        <button onClick={() => handleClick("%")}>%</button>
        <button onClick={() => handleClick("CE")}>CE</button>
        <button onClick={() => handleClick("C")}>C</button>
        <button onClick={() => handleClick("CE")}>xóa</button>

        <button onClick={() => handleClick("1/x")}>1/x</button>
        <button onClick={() => handleClick("x^2")}>x²</button>
        <button onClick={() => handleClick("√x")}>√x</button>
        <button onClick={() => handleClick("/")}>÷</button>

        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("*")}>×</button>

        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("-")}>−</button>

        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("+")}>+</button>

        <button onClick={() => handleClick("+/-")}>+/−</button>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button onClick={() => handleClick("=")}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
