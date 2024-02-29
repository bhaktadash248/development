const arr = [2,5,7,9,6,78,1005,1213,4,8,5,12,45]

let output = arr.reduce((acc, curr)=>{
    if(acc < curr){
        acc = curr
    }
    return acc
},0)

console.log(output)