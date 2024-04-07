#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from 'chalk';

let myTodo :string[]=[];

let condition=true;
while(condition)
{
let ans = await inquirer.prompt(
    [{
        name:"select",
        type:"list",
        message:"what do you want to do in your todos list?",
        choices:["add","view","update","delete"],
},]);

if(ans.select == "add"){
    let addTodo=await inquirer.prompt({
        name:"additem",
        type:"input",
        message:"please add in your todos",
    });
    myTodo.push(addTodo.additem)
    console.log(chalk.blue.underline("-->",myTodo))

}
if(ans.select == "view"){
    console.log(chalk.underline.yellow("--> ",myTodo))
}
if(ans.select == "update"){
    let updateTodo=await inquirer.prompt({
        name:"update",
        type:"list",
        message:"please select to update in your todos",
        choices:myTodo.map(item => item),
    });
    let addTodo=await inquirer.prompt({
        name:"additem",
        type:"input",
        message:"please update your todos",
    });
    let newtodo=myTodo.filter(val => val != updateTodo.update)
    myTodo=[...newtodo,addTodo.additem]
    console.log(chalk.underline.green("--> ",myTodo))

}
if(ans.select == "delete"){
    let deleteTodo=await inquirer.prompt({
        name:"delete",
        type:"list",
        message:"please select to delete in your todos",
        choices:myTodo.map(item => item)
    });
    let newtodo=myTodo.filter(val => val != deleteTodo.delete)
    myTodo=[...newtodo]
    console.log(chalk.underline.redBright("--> ",myTodo))
}
let addMore=await inquirer.prompt({
    name:"addMore",
    type:"confirm",
    message:"Do you want to add more task?",
    default:"true",
    });

// //loop is running on the based of this variable condition
condition = addMore.addMore;
};

