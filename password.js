let input = document.getElementById("inputBox");

let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let number = "0123456789";
let symbol = "~$&*{-}#[_^]?/(=)@<%>+!";

let length = 10;

let allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
   let password = "";
   password += upperCase[Math.floor(Math.random() * upperCase.length)];
   password +=  lowerCase[Math.floor(Math.random() * lowerCase.length)];
   password += number[Math.floor(Math.random() * number.length)];
   password +=  symbol[Math.floor(Math.random() * symbol.length)];

   while(password.length < length){
    password +=  allChars[Math.floor(Math.random() * allChars.length)];
   } 
   input.value = password;
}

input.value = ""; // it is used to remove the generated password from the input area after page reload and new session starts.

function copyText() {
    input.select(); // used to select which thing to get copied
    document.execCommand("copy"); // the execCommand is deprecated which is simply a dead method.
}





