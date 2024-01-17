let obj ={
    firstname:"Bhakta",
    lastname:"Dash"
}

function fullname(city, state, country){
    console.log(this.firstname + " " + this.lastname + " from " + city + " state " + state + " and country " + country) 
}

// fullname.apply(obj,['Berhampur', "Odisha"])

Function.prototype.myapply = function(obj={}, args=[]){
    let randomProp = Math.random();
    obj[randomProp] = this; 
    let result = obj[randomProp](...args); 
    delete obj[randomProp]; 
    return result;
}

fullname.myapply(obj,['Berhampur', "Odisha", "india"])
