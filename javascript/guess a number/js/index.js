const randomNum = Math.floor(Math.random() * 100) + 1
let enterVal;
let success = "Conguraations your guess was correct"
let less = "Last guess was too low"
let greater = "Last guess was too high!"
let retry = "You lose the game please re-try"
let count = 0;
let prevGuess = document.querySelector("#prev-guess")
const validateNumber = () => {
    count++
    enterVal = document.getElementById("get-number").value

    prevGuess.textContent += enterVal + " "
    if (count < 10) {
        if (randomNum == enterVal) {
            document.querySelector("#guess-result").innerHTML = success
        } else if (randomNum > enterVal) {
            document.querySelector("#guess-result").innerHTML = less

        } else if (randomNum < enterVal) {
            document.querySelector("#guess-result").innerHTML = greater
        }
    } else {
        document.querySelector("#guess-result").innerHTML = retry
    }

}
