const drag = (ev) =>{
    var data = ev.dataTransfer.setData("text", ev.target.id);
    console.log(data)
}

// const logo = document.querySelector("#imageLogo")
// logo.addEventListener("ondragstart" , dragOverFucn(event))