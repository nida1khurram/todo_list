#! /usr/bin/env node
import inquirer from "inquirer";

let myTodo =[];
let condition=true;
while(condition){
let todoTask = await inquirer.prompt(
    [{
        name:"todo",
        type:"input",
        message:"what do you want to add in your todos list?",
},
{
    name:"addMore",
    type:"confirm",
    message:"Do you want to add more task?",
    default:"false",
}
]);

myTodo.push(todoTask.todo);
condition = todoTask.addMore;
console.log(myTodo);
};