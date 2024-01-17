// polyfill of bind

let obj = {
   firstName: "Bhakta",
   lastName: "Dash"
}

function bindProto(city, state, pin, country) {
   console.log(this.firstName + " " + this.lastName + " " + city + " "+ state + " " + pin + " " + country)
}

Function.prototype.myBind = function (...args) {
   console.log(args.slice(1))
   let obj = this;
   return function (...args2) {
      console.log(args2)
      obj.apply(args[0], [...args.slice(1), ...args2])
   }
}

let bindPrototype = bindProto.myBind(obj, "berhampur", "760001");
bindPrototype("odisha", "india")