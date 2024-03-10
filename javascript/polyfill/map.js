const arr = [2, 4, 8, 6]

function suqare(val) {
    return val*val*val
}

Array.prototype.mapPolyfil = function (suqare) {
    const output = [];
    for(let i = 0 ; i < this.length; i++){
        output.push(suqare(this[i]))
    }

    return output;
}

console.log(arr.mapPolyfil(suqare))