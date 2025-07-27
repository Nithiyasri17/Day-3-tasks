let tasks = [];
function addTask(task, callback) {
    tasks.push(task);
    console.log(`Task "${task}" added.`);
    callback(); 
}
function printTasks() {
    console.log("Current Tasks:");
    tasks.forEach((task, index) => {
        console.log(`${index + 1}. ${task}`);
    });
}
const countTasks = () => {
    console.log(`Total number of tasks: ${tasks.length}`);
};
function addMultipleTasks(...taskList) {
    taskList.forEach(task => {
        tasks.push(task);
        console.log(`Task "${task}" added.`);
    });
    printTasks();
}
function variableScopeDemo() {
    var insideVar = "I'm inside the function";
    console.log(insideVar); 

    if (true) {
        let blockScoped = "I'm block scoped";
        console.log(blockScoped); 
    }
}
var globalVar = "I'm outside the function";
addTask("Complete JS assignment", printTasks);
addTask("Read callback concepts", printTasks);
countTasks();
addMultipleTasks("Practice scope", "Review functions", "Build mini project");
variableScopeDemo();
console.log(globalVar); 