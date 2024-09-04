let printFullName = function (a, b) {
    console.log("Hi" + " " + a + " " + b + " " + this.firstName + this.lastName)
}


let myName = {
    firstName: "Zeeshan ",
    lastName: "Ali",
}

let name2 = {
    firstName: "Numan ",
    lastName: "Ahmad",
}

// call() Invokes the function immediately with a specified this context and individual arguments.
printFullName.call(myName);
printFullName.call(name2, "dear ", "bear ");

// apply() Invokes the function immediately with a specified this context and arguments provided as an array.
printFullName.apply(name2, ["dear ", "bear "]);

// bind() Returns a new function with a specified this context and optionally preset arguments, without invoking it immediately.
let printWithBind = printFullName.bind(myName, "papa");
printWithBind("mama")
