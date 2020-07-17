// Fungsi untuk memperbarui layar tampilan
const calculatorScreen = document.querySelector(".calculator-screen");

const updateScreen = (number) => {
  calculatorScreen.value = number;
};
// ----------------------------

// Mengambil element <button> HTML di code Javascript
const numbers = document.querySelectorAll(".number");

// Mendapatkan masing-masing angka dari constant, menambah event click ke setiap element, dan menampilkan angka saat menekan tombol
numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    inputNumber(event.target.value);
    updateScreen(currentNumber);
  });
});
// ----------------------------

// Mendefinisikan variable untuk melakukan kalkulasi
let prevNumber = "";
let calculationOperator = "";
let currentNumber = "0";
// ----------------------------

// Mengaktifkan input lebih dari 2 digit
const inputNumber = (number) => {
  if (currentNumber === "0") {
    currentNumber = number;
  } else {
    currentNumber += number;
  }
};
// ----------------------------

// Menambahkan click event ke operator
const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    inputOperator(event.target.value);
  });
});
// ----------------------------

// Mendefinisikan fungsi input operator
const inputOperator = (operator) => {
  if (calculationOperator === "") {
    prevNumber = currentNumber;
  }
  calculationOperator = operator;
  currentNumber = "0";
};
// ----------------------------

// Menambahkan click event untuk equal sign "="
const equalSign = document.querySelector(".equal-sign");

equalSign.addEventListener("click", () => {
  calculate();
  updateScreen(currentNumber);
});
// ----------------------------

// Menambahkan fungsi kalkulasi
const calculate = () => {
  let result = "";
  switch (calculationOperator) {
    case "+":
      result = parseFloat(prevNumber) + parseFloat(currentNumber);
      break;
    case "-":
      result = parseFloat(prevNumber) - parseFloat(currentNumber);
      break;
    case "*":
      result = parseFloat(prevNumber) * parseFloat(currentNumber);
      break;
    case "/":
      result = parseFloat(prevNumber) / parseFloat(currentNumber);
      break;
    default:
      break;
  }
  currentNumber = result;
  calculationOperator = "";
};
// ----------------------------

// Mengambil element <button> All Clear dan menambahkan click event
const clearBtn = document.querySelector(".all-clear");

clearBtn.addEventListener("click", () => {
  clearAll();
  updateScreen(currentNumber);
});
// ----------------------------

// Mendefinisikan dan menjalankan fungsi clearAll
const clearAll = () => {
  prevNumber = "";
  calculationOperator = "";
  currentNumber = "0";
};
// ----------------------------

// Menambahkan click event ke element <button> decimal
const decimal = document.querySelector(".decimal");

decimal.addEventListener("click", (event) => {
  inputDecimal(event.target.value);
  updateScreen(currentNumber);
});
// ----------------------------

// Mendefinisikan dan menjalankan fungsi decimal
inputDecimal = (dot) => {
  if (currentNumber.includes(".")) {
    return;
  }
  currentNumber += dot;
};
// ----------------------------
