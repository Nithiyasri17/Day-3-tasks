function greetUser(name, callback) {
  console.log("Hello, " + name + "!");
  callback(); 
}
function afterGreeting() {
  console.log("Welcome to the JavaScript session.\n");
}
greetUser("Nithiya", afterGreeting);
function doTask(taskName, callback) {
  console.log("Starting task: " + taskName);
  setTimeout(function () {
    console.log("Task '" + taskName + "' completed.\n");
    callback();
  }, 1000); 
}
function taskFinished() {
  console.log("All tasks are completed successfully!\n");
}
doTask("Downloading file", taskFinished);
var globalVar = "I am a global variable";
function scopeExample() {
  var localVar = "I am a local variable";

  if (true) {
    var functionScoped = "Declared with var inside block";
    let blockScopedLet = "Declared with let inside block";
    const blockScopedConst = "Declared with const inside block";

    console.log("Inside block:");
    console.log(functionScoped);     
    console.log(blockScopedLet);      
    console.log(blockScopedConst);    
  }
  console.log("\nInside function:");
  console.log(localVar);             
  console.log(functionScoped);       
}
scopeExample();
console.log("\nIn global scope:");
console.log(globalVar);             
console.log("\nScope difference in loops:");
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("var i:", i), 500);
}
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log("let j:", j), 500);
}
const add = (a, b) => a + b;
console.log("\nArrow Function Result: add(5, 3) =", add(5, 3));

