// Prompt to ask quicks about the type of chahrtrs and size of passwrod to be generated. 
alert("Welcome to Steph's Awesome Secure Password Generator!")
var passwordLength = prompt("How many characters would you like your password to be? Pick a number between 8 and 128.")
var passwordLengthChecker = Number(passwordLength)
var charTypeSpec = confirm("Would you like special characters including a space?  !\"/#$%&'()*+,-./:;<=>?@[\\]^_`{|}~")
var charTypeNumbers = confirm("Would you like to use numbers 0-9?")
var charTypeLowercase = confirm("Would you like lowercase letters?")
var charTypeUppercase = confirm("Would you like uppercase letters?")

