function greetUser(name) {
  console.log("Hello, " + name + "!");
}
greetUser("Nithiyasri");
function showArguments() {
 console.log("Arguments received:");
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}
showArguments("JavaScript", 101, true);
function calculateSum(...numbers) {
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  console.log("Sum of numbers:", sum);
}
calculateSum(10, 20, 30, 40);
function multiplyNumbers(...nums) {
  let product = 1;
  for (let n of nums) {
    product *= n;
  }
  console.log("Product of numbers:", product);
}
multiplyNumbers(2, 3, 4);