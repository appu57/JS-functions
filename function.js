function data(){
    console.log("Data console");
}

data.language="Javascript";

function dataRemoved(){
    console.log("Data Removed");
}

let language = "Java"+"script";
dataRemoved[data.language] ="Removed successfully";

//This behavior is part of the flexibility and dynamic nature of the language. When you assign a property to a function, JavaScript treats the function as an object, allowing you to add properties to it
"###############################################################################################################################################################"


let valuex= 10;

function print(){
    console.log("value of valuex"+valuex);  //20 This demonstrates how changes to a variable within one function can affect the variable's value in another function if they share the same scope or if the variable is declared in an outer scope accessible to both functions.
}

function printAbovefunction(){
    valuex=20;
    print();
}

printAbovefunction();
"###############################################################################################################################################################"

function noParams(){}
console.log(noParams.length);//0 because no parameter



function params(a,b,...rest){}
console.log(params.length);//2 because length don't include rest parameter
"###############################################################################################################################################################"



function doTask(){
    return {
        success:true
    };
}
console.log(doTask()); //{success:true}

function doTask2(){
    return
    {
        success:true
    };
}
console.log(doTask2()); //undefined because we see the next of return is empty which the browser considers as end of line and adds (;) hence return; is undefined . "Automatic semicolon insertion"

"###############################################################################################################################################################"

function showTask(){
    this.names = "name"
    var name="do not create its declaration";
    console.log(name);
    console.log(this.names);
}
const task1 = new showTask();//new creates a new object reference of showTask function and assigns it to task1 since within function we have used this.name the name is available within the new object and is accessible when we print task1.name it prints with no error
console.log(task1.name);//undefined because name only exists within showTask() function and do not exist within the new object reference created using "new" keyword
console.log(task1.names);//"name" but here since we used this.name it creates variable in the new object reference and is accessible
console.log(task1);
"###############################################################################################################################################################"