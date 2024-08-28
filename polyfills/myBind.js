let printFullName = function (a, b) {
    console.log("Hi" + " " + a + " " + b + " " + this.firstName + this.lastName)
}

let username = {
    firstName: "Zeeshan ",
    lastName: "Ali",
}

Function.prototype.myBind = function (...args) {
    let obj = this;
    let args1 = args.slice(1)
    return function (...args2) {
        obj.apply(args[0], [...args1, ...args2])
    }
}

let printName = printFullName.myBind(username, "dear", "sfdfd", "dfdppz");
printName("bear")