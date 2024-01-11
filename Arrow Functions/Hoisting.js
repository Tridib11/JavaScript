// 3. Hoisting

    /* 
    Hoisting in JavaScript is a behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase, before the actual code execution. This means that you can use variables and functions in your code even before they are declared.


    Variable Hoisting:

    console.log(x); // undefined
    var x = 5;
    console.log(x); // 5

    Function Hoisting:
    sayHello(); // "Hello, World!"

    function sayHello() {
        console.log("Hello, World!");
    }


    Not availabe in arrowFunctions =>  in arrow functions we can call the functions onky after assignning them

    */

    

    let hoisting = ()=>{
        console.log("Hoising");
    }
    hoisting()