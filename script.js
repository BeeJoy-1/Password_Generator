
let icon_btn = document.querySelector(".icon_btn")
let btn = document.querySelector(".btn")
let passwordValue = document.querySelector("#password")

const Length = 12;

const UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWX"
const LowerCase = "abcdefghijklmnopqrstuvwx"
const Numbers = "0123456789"
const Symbols = "`~!@#$%^&*_+-=?"
 
const allchars = UpperCase + LowerCase + Numbers + Symbols;

function generatePassword() {
    let password = "";
    
    password += UpperCase[Math.floor(Math.random() * UpperCase.length)]
    password += LowerCase[Math.floor(Math.random() * LowerCase.length)]
    password += Numbers[Math.floor(Math.random() * Numbers.length)]
    password += Symbols[Math.floor(Math.random() * Symbols.length)]

    while (Length > password.length){
        password += allchars[Math.floor(Math.random() * allchars.length)]
    }

    passwordValue.value = password;
}

function copyPass(){
    navigator.clipboard.writeText(passwordValue.value)
}

btn.addEventListener("click", function(){
    generatePassword();
})

icon_btn.addEventListener("click", function(){
    copyPass();
})
