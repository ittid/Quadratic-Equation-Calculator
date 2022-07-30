/*=== === === === === === === === === === 
~~~~ JavaScript quadratic calculator ~~~~
=== === === === === === === === === ===*/

const a_operand = document.getElementById("a_num");
const b_operand = document.getElementById("b_num");
const c_operand = document.getElementById("c_num");
const a_display = document.getElementById("a_value");
const b_display = document.getElementById("b_value");
const c_display = document.getElementById("c_value");

const errorMs_a = document.getElementById("msg_a");
const errorMs_b = document.getElementById("msg_b");
const errorMs_c = document.getElementById("msg_c");

/* computed function Δ=b2-4ac */
const calcBtn = document.querySelector("[data-calcs]");
const bigMsg = document.getElementById("big_msg");
const deltaResult = document.getElementById("calc");
const firstSolution = document.getElementById("x1");
const secoundSolution = document.getElementById("x2");

a_operand.addEventListener("input", displayValue_a);
function displayValue_a(e) {
  if (isNaN(parseFloat(e.target.value))) {
    errorMs_a.innerText = "please enter a valid number";
    a_display.innerText = "";
  }
  if (parseFloat(e.target.value) == 0) {
    errorMs_a.innerText = `please don't enter zero (0) \n bx+c is a Linear equation not a Quadratic Equation`;
    a_display.innerText = "";
  } else if (!isNaN(parseFloat(e.target.value))) {
    errorMs_a.innerText = "";
    a_display.innerText = parseFloat(e.target.value);
  }
}

b_operand.addEventListener("input", displayValue_b);
function displayValue_b(e) {
  if (isNaN(parseFloat(e.target.value))) {
    errorMs_b.innerText = "please enter a valid number";
    b_display.innerText = "";
  } else if (!isNaN(parseFloat(e.target.value))) {
    errorMs_b.innerText = "";
    b_display.innerText = parseFloat(e.target.value);
  }
}

c_operand.addEventListener("input", displayValue_c);
function displayValue_c(e) {
  if (isNaN(parseFloat(e.target.value))) {
    errorMs_c.innerText = "please enter a valid number";
    c_display.innerText = "";
  } else if (!isNaN(parseFloat(e.target.value))) {
    errorMs_c.innerText = "";
    c_display.innerText = parseFloat(e.target.value);
  }
}

calcBtn.addEventListener("click", (e) => {
  if (
    isNaN(parseFloat(a_operand.value)) ||
    isNaN(parseFloat(b_operand.value)) ||
    isNaN(parseFloat(c_operand.value))
  ) {
    e.preventDefault();
    bigMsg.innerText = "Please fill the field first before calculating";
  }
  else if (parseFloat(a_operand.value) == 0) {
    e.preventDefault();
  } else {
    computed(
      parseFloat(a_operand.value),
      parseFloat(b_operand.value),
      parseFloat(c_operand.value)
    );
    bigMsg.innerText = "";
  }
});

function computed(a, b, c, x = 1) {
  let calc = Math.pow(b, 2) - 4 * (a * c);
  var delta = calc;
  deltaResult.innerText = delta;

  function calcDeltaWithTwoAnswer(a, b, delta) {
    let x1 = (-b - Math.sqrt(delta)) / (2 * a);
    let x2 = (-b + Math.sqrt(delta)) / (2 * a);
    let x3 = -b / (2 * a);
    if (delta < 0) {
      deltaResult.innerText += ` delta is < 0 so this Quadratic doesn't have any solution`;
      firstSolution.innerText = "⛔️";
      secoundSolution.innerText = "⛔️";
    } else if (delta == 0) {
      deltaResult.innerText += ` delta is = 0 so this Quadratic have one solution`;
      firstSolution.innerText = x3.toFixed(2);
      secoundSolution.innerText = "⛔️";
    } else {
      deltaResult.innerText += ` delta is > 0 so this Quadratic have 2 solution`;
      firstSolution.innerText = x1.toFixed(3);
      secoundSolution.innerText = x2.toFixed(4);
    }
  }

  calcDeltaWithTwoAnswer(
    parseFloat(a_operand.value),
    parseFloat(b_operand.value),
    delta
  );
}
