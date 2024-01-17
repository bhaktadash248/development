// function currying

const multiplication = function (x, y) {
    console.log(x * y)
}

const multiple = multiplication.bind(this,2)
multiple(5)

// using clouser

let mul = function (x) {
    return function (y) {
        console.log(x * y)
    }
}

const multiply = mul(2);
multiply(5)