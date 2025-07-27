function subtract(a, b) {
  return a - b;
}
console.log("Subtract (Traditional):", subtract(10,5));
const multiply = function(x, y) {
  return x * y;
};
console.log("Multiply (Expression):", multiply(4, 5));
const divide = (a, b) => a / b;
console.log("Divide (Arrow):", divide(20, 4));
const square = n => n * n;
console.log("Square (Arrow):", square(6));
const greet = name => {
  console.log("Hi " + name + "!");
  console.log("Welcome to JavaScript Functions!");
};
greet("Nithiyasri");
const sayHello = () => {
  console.log("Hello, World!");
};
sayHello();