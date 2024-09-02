document.addEventListener("DOMContentLoaded", function () {
  const numbers = document.querySelectorAll([".number", ".numberZero"]);
  const result = document.getElementById("result");
  const signs = document.getElementsByClassName("item sign");
  const equal = document.querySelector(".equal");
  const negative = document.querySelector(".negative");
  const clear = document.querySelector(".clear");
  const percentage = document.querySelector(".percentage");
  const coma = document.querySelector(".coma");

  let firstValue = "";
  let isFirstValue = false;
  let secondValue = "";
  let isSecondValue = false;
  let sign = "";
  let resultValue = 0;
  let isequal;

  for (let i = 0; i < numbers.length; i++) {
    let num1 = 0;
    numbers[i].addEventListener("click", (e) => {
      let atr = e.target.textContent;
      clear.innerHTML = "C";
      if (isFirstValue === false) {
        getFirstValue(atr);
      }
      if (isSecondValue === false) {
        getSecondValue(atr);
      }
    });
  }
  function getSign() {
    for (let i = 0; i < signs.length; i++) {
      signs[i].addEventListener("click", function (e) {
        sign = e.target.textContent;
        isFirstValue = true;
        //change the color of the button
      });
    }
  }
  getSign();

  function getFirstValue(el) {
    result.innerHTML = "";
    firstValue += el;
    result.innerHTML = +firstValue;
  }
  function getSecondValue(el) {
    if (firstValue != "" && sign != "") {
      secondValue += el;
      result.innerHTML = +secondValue;
    }
  }
  equal.addEventListener("click", () => {
    isequal = true;
    result.innerHTML = 0;

    if (sign === "") {
      resultValue = firstValue;
    } else if (sign === "+") {
      resultValue = parseFloat(firstValue) + parseFloat(secondValue);
    } else if (sign === "-") {
      resultValue = parseFloat(firstValue) - parseFloat(secondValue);
    } else if (sign === "x") {
      resultValue = parseFloat(firstValue) * parseFloat(secondValue);
    } else if (sign === "/") {
      if (secondValue === "") {
        alert("Error! Division by zero");
      } else {
        resultValue = parseFloat(firstValue) / parseFloat(secondValue);
      }
    }
    //create a function that gives the number of nonzero fraction digits.
    result.innerHTML = resultValue;
    firstValue = resultValue;

    sign = "";
    getSign();
    secondValue = "";
  });

  negative.addEventListener("click", () => {
    result.innerHTML = "";
    resultValue = -firstValue;
    firstValue = -firstValue;
    result.innerHTML = resultValue;
  });

  clear.addEventListener("click", () => {
    clear.innerHTML = "AC";
    if (isequal) {
      isFirstValue = false;
      firstValue = "";
      secondValue = "";
      sign = "";
      result.innerHTML = 0;
      resultValue = 0;
      isequal = false;
    } else {
      if (isFirstValue) {
        result.innerHTML = 0;
        secondValue = "";
        console.log(firstValue);
        console.log(secondValue);
        console.log(sign);
      } else {
        firstValue = "";
        result.innerHTML = 0;
      }
    }
  });
  percentage.addEventListener("click", () => {
    let percentVal = (parseFloat(result.innerText) / 100).toFixed(5);
    result.innerHTML = percentVal;
    firstValue = percentVal;
  });

  coma.addEventListener("click", () => {
    if (!isFirstValue) {
      firstValue = firstValue + ".";
      result.innerHTML = firstValue;
    } else {
      secondValue += ".";
      result.innerHTML = secondValue;
    }
  });
});
