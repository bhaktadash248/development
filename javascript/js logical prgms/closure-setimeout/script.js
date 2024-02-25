// closure with set timeout

function closureSetimtout(){
    for(var i = 1; i <= 5; i++){
        function close(x){
            setTimeout(function(){
                console.log(x)
            },1000)
        }
       close(i)
    }
    
}

closureSetimtout()