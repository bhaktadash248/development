// polyfill of bind

let obj = {
   firstName: "Bhakta",
   lastName: "Dash"
}

function polyfillBind(city, state,  pin, country){
   console.log(this.firstName + " " + this.lastName +" from " + city + " state " + state + " country " + country + " pin " + pin)
}

// Function.prototype.myBind = function(...args){
//    let obj = this;
//    console.log(args.slice(1))
//    return function(...args2){
//       console.log(args2)
//       obj.call(args[0], ...args.slice(1), ...args2)
//    }
// }

// another approach

Function.prototype.myBind = function(obj={},...args){
   obj.fn = this;
   return function(...args2){
      obj.fn(args[0], ...args.slice(1), ...args2)
   }
}

let bindPolyfill = polyfillBind.myBind(obj, "Berhampur", "Odisha", "760001")
bindPolyfill("india")