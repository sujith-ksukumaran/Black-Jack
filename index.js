let firstCard = 10
let secondCard = 11
let hasBlackjack = false
let isAlive = true
let message = ""
let sum = firstCard + secondCard
let messageEl = document.getElementById("message-el")

function startGame()
{
if (sum <= 20){
    message = "Do you want to draw a new card?"
     console.log(message)
}
else if (sum === 21){
    message = "wohoo!, you've got Black jack!"
    hasBlackjack = true
     console.log(message)
}
else {
    message = "You lost the game!"
    isAlive = false
     console.log(message)
}
 console.log(hasBlackjack)
  console.log(isAlive)
}



// let age = 110
// if (age < 100){
//     console.log("You are not eligible for a bday card")
// } else if (age === 100 ){
//     console.log("Congradulations! here's your birthday card from the King")
// } else {
//     console.log("Invalid, you already received your birthday card")
// }