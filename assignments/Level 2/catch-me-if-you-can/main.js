
function sum(x, y) {
    if (typeof(x) !== "number") {
        throw new Error("x is not a number")
    } else if (typeof(y) !== "number") {
        throw new Error("y is not a number")
    }
    return x + y
}

try {
console.log(sum(1, "one"))
}

catch(err) {
    console.log(err)
}

var user = {username: "sam", password: "123abc"}
function login(username, password) {
    if(username !== "sam") {
        throw new Error("incorrect username")
    } else if(password !== "123abc") {
        throw new Error("incorrect password")
    } console.log("login successful")
}

try {
login("sam", "123abc")
}

catch(err) {
    console.log(err)
}
