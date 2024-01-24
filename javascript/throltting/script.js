// custom thrultting 

let throlttingEvnt = (fn, delay = 300) => {
    let throlttingFlag = true
    return (...args) => {
        if(throlttingFlag){
            fn.apply(this, args);
            throlttingFlag = false
        }
        setTimeout(() => {
            throlttingFlag = true
        }, delay)
    }
}

let throlttingConsole = (e) =>{
    console.log(e.target.window.innerWidth)
}

let resizeWindow = throlttingEvnt((event) => throlttingConsole(event))

window.addEventListener("resize", resizeWindow)