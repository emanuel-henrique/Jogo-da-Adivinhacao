import { generateARandomNumber } from "./Utils.js"

let randomNumber = generateARandomNumber()
let xAttempts = 1

const jogoAdivinhação = 
{
    Screen1: document.querySelector(".Screen1"),
    Screen2: document.querySelector(".Screen2"),
    buttonTry: document.querySelector("#btnTry"),
    buttonReset: document.querySelector("#btnReset"),
    inputNumber: document.querySelector("#inputNumber"),
    toggleScreen()
    {
        jogoAdivinhação.Screen1.classList.toggle("Hide")
        jogoAdivinhação.Screen2.classList.toggle("Hide")
    },
    tryClick(event)
    {
        event.preventDefault()

        checkInputNumberIsEqualToRandomNumber(jogoAdivinhação.inputNumber)

        jogoAdivinhação.inputNumber.value = ""
        xAttempts++
    },
    resetClick(event) 
    {
        event.preventDefault()
        jogoAdivinhação.toggleScreen()
        randomNumber = generateARandomNumber()
        xAttempts = 1
    }
}

jogoAdivinhação.buttonTry.addEventListener('click', jogoAdivinhação.tryClick)
jogoAdivinhação.buttonReset.addEventListener('click', jogoAdivinhação.resetClick)

function checkInputNumberIsEqualToRandomNumber(inputNumber)
{
    if(inputNumber.value == randomNumber)
    {
        jogoAdivinhação.toggleScreen()
        jogoAdivinhação.Screen2.querySelector("h2").innerHTML = `Acertou em ${xAttempts} tentativa(s)`
    }
}