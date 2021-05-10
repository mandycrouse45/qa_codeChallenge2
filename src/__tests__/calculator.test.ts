import calculator from "../calculator";

// each of the objects in the dataset array has the pieces of a math problem.
// "add": x + y
// "subtract": x - y
// "multiply": x * y
// "divide": x / y
let dataset = [
  { x: 5, y: 10, method: "add" },
  { x: 5, y: 10, method: "subtract" },
  { x: 5, y: 10, method: "multiply" },
  { x: 5, y: 10, method: "divide" },
  { x: -12, y: 10000, method: "add" },
  { x: -12, y: 10000, method: "subtract" },
  { x: -12, y: 10000, method: "multiply" },
  { x: -12, y: 10000, method: "divide" },
  { x: 42, y: 0, method: "add" },
  { x: 42, y: 0, method: "subtract" },
  { x: 42, y: 0, method: "multiply" },
  { x: 42, y: 0, method: "divide" },
  { x: 81, y: 227, method: "add" },
  { x: 81, y: 227, method: "subtract" },
  { x: 81, y: 227, method: "multiply" },
  { x: 81, y: 227, method: "divide" },
];

function mySwitchCase (data) {
  switch (data.method) {
    case 'add':
      return calculator.add(data.x, data.y)
      break
    case 'subtract':
      return calculator.subtract(data.x, data.y)
      break
    case 'multiply':
      return calculator.multiply(data.x, data.y)
      break
    case 'divide':
      return calculator.divide(data.x, data.y)
      break
  }
}

describe("Calculator", () => {
  it('Can add', () => {
    console.log(calculator.add(dataset[0].x, dataset[0].y))
  })
  it('Can subtract', () => {
    console.log(calculator.subtract(dataset[1].x, dataset[1].y))
  })
  it('Can multiply', () => {
    console.log(calculator.multiply(dataset[2].x, dataset[2].y))
  })
  it('Can divide', () => {
    console.log(calculator.divide(dataset[3].x, dataset[3].y))
  })
});
