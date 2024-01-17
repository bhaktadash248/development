let obj = {
    firstname: "Bhakta",
    lastname: "Dash"
}

let obj2 = {
    firstname: "Lucky",
    lastname: "Batchala",
}

function fullName(city) {
    console.log(this.firstname + " " + this.lastname + " from " + city)
}

// fullName.call(obj2)

// polyfill of call

Function.prototype.myCall = function(context, ...args){
    context.fullName = this
    context.fullName(...args)
}

fullName.myCall(obj, "Berhampur")


