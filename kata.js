console.log("Add: 1 Point");
function add(x, y) {
    return (x + y)
}
console.log(add(2, 4));


console.log("Multiply: 2 Points");
function multiply(a, b) {
    var c = 0
    for (let counter = 1; counter <= b; counter++) {
        c = c + a
    }
    return (c)
}
console.log(multiply(6, 8));


console.log("Power: 2 Points");
function Power(a, b) {
    var c = 1
    for (let counter = 1; counter <= b; counter++) {
        c = c * a
    }
    return (c)
}
console.log(Power(2, 8));


console.log("Factorial: 2 Points");
function factorialize(counter) {
    let result = counter;
    if (counter === 0 || counter === 1) {
        return 1;
    }
    while (counter > 1) {
        counter--;
        result = multiply(counter, result);
    }
    return result;
}
console.log(factorialize(4));


console.log("Fibonacci: 3 Points");
    function fibonacci(n) {
    var numberbeforeresult = 1;
    var twobeforeresult = 1;
    var result = 0
    for (let counter = 1; counter < n; counter++) {
        twobeforeresult = numberbeforeresult
        numberbeforeresult = result
        result = add(numberbeforeresult, twobeforeresult)
    }
    return result;
}
    console.log(fibonacci(8));