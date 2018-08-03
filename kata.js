let addme = add(2, 4);

console.log("Add: 1 Point");
function add(x, y) {
    return x + y
}
console.log(add(2, 4));


let multme = multiply(addme, 8)

console.log("Multiply: 2 Points");
function multiply(addme, b) {
    let result = 0
    for (let counter = 1; counter <= b; counter++) {
        result = add(addme, result)
    }
    return (result)
}
console.log(multiply(6, 8));


console.log("Power: 2 Points");
function Power(a, b) {
    let result = 1
    for (let counter = 1; counter <= b; counter++) {
        result = multiply(a, result)
    }
    return (result)
}
console.log(Power(2, 8));


console.log("Factorial: 2 Points");
function factorialize(counter) {
    let result = 1
    for (let counter = 4; counter>0; counter--) {
        result = multiply(counter, result)
    }
    return (result)
}
console.log(factorialize(4));


console.log("Fibonacci: 3 Points");
    function fibonacci(n) {
    let numberbeforeresult = 1;
    let twobeforeresult = 1;
    let result = 0
    for (let counter = 1; counter < n; counter++) {
        twobeforeresult = numberbeforeresult
        numberbeforeresult = result
        result = add(numberbeforeresult, twobeforeresult)
    }
    return result;
}
    console.log(fibonacci(8));