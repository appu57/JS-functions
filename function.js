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
