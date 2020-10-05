// Prompt to ask quicks about the type of chahrtrs and size of password to be generated. 
alert("Welcome to Steph's Awesome Secure Password Generator!")
var passwordLength = prompt("How many characters would you like your password to be? Pick a number between 9 and 110.")
var passwordLengthChecker = Number(passwordLength)
var charTypeSpec = confirm("Would you like special characters including a space?  !\"/#$%&'()*+,-./:;<=>?@[\\]^_`{|}~")
var charTypeNumbers = confirm("Would you like to use numbers 0-9?")
var charTypeLowercase = confirm("Would you like to use lowercase letters?")
var charTypeUppercase = confirm("Would you like to use uppercase letters?")

// Variables for characters/letters

var specialChars = " !\"/#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
var numChars = "0123456789"
var lowerLetters = "abcdefghijklmnopqrstuvwxyz"
var upperLetters = lowerLetters.toUpperCase()

var charListFinal = ""

// Button Variables

var generateButton = document.querySelector("#gen")
var copyButton = document.querySelector("#copy")
var passwordBox = document.querySelector("#pass-final")

// Function and alert to make sure user selected password length between 9-110

var choseLengthCorrectly = function () {
    alert("Please select a password length between 9 and 110 characters.")
    passwordLength = prompt("How many characters would you like your secure password to be? Needs to be between 9 and 110.")
    passwordLengthChecker = Number(passwordLength)
}

// Function and alert to make sure at least one type of character is selected
var choseCharList = function () {
    alert("Please select at least one of the four character types.")
    charTypeSpec = confirm("Would you like to use special characters including a space?")
    charTypeNumbers = confirm("Would you like to use numbers 0-9?")
    charTypeLowercase = confirm("Would you like to use lowercase characters?")
    charTypeUppercase = confirm("Would you like to use uppercase characters?")

}

// Function to make final chararter list to select from for password generation and returns list completed

var generateFinalCharList = function () {

    if (charTypeSpec === true) {
        charListFinal += specialChars
    }
    if (charTypeNumbers === true) {
        charListFinal += numChars
    }
    if (charTypeLowercase === true) {
        charListFinal += lowerLetters
    }
    if (charTypeUppercase === true) {
        charListFinal += upperLetters
    }
    return charListFinal
}


// Function to create secure password and add password into password div

var generatePass = function () {
    // event.preventDefault()
    var pass = ""
    var charList = generateFinalCharList()
    for (var i = 0; i < passwordLength; i ++) {
        pass += charList[Math.floor(Math.random() * charList.length)]
    }
    passwordBox.textContent = pass
}

// Copy secure generated password to Clipboard

var copyText = function () {
    var copyText = documnet.getElementById("pass-final");
    var textArea = document.createElement("textarea");
    textArea.value = copyText.textContent;
    documnet.body.appendChild(textarea);
    textArea.select();
    document.execCommand("Copy");
    alert("Your awesome secure password has been copied to the clipboard!")
    textArea.remove();
}

// When buttons are clicked event listeners

generateButton.addEventListener("click", generatePass)
copyButton.addEventListener("click", copyText)


// While loops until the user selects a character type

while (passwordLengthChecker < 8 || passwordLengthChecker > 128) {
    choseLengthCorrectly()
}
while (charTypeLowercase == false && charTypeNumbers == false && charTypeSpec == false && charTypeUppercase === false) {
    choseCharList()
}
