const searchAPI = (e)=>{
    console.log(e.target.value)
}

const searchDebounce = (fn,d=300) =>{
    let timer;
    return (...args)=>{
        clearInterval(timer)
        timer = setTimeout(()=>{
            fn.apply(this, args)
        },d)
        
    }
}

const searchData = searchDebounce((event) => searchAPI(event))

let searchInput = document.querySelector("#search-input");
searchInput.addEventListener("keyup", searchData)