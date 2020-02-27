




var char = 'abcdefghijklmnopqrstuvwxyz';
let charUpp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var num = '0123456789';
var sym = '!@#$%^&*=-_';


// Assignment Code
let generateBtn = document.querySelector("#generate");

function generatePassword (){
  let g = prompt('how long bb>')
  alert (g)
  length = g
  lower = 'abcdefghijklmnopqrstuvwxyz'
  upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  pass = "";
  for (i=0; i<length;i++){
      pass += lower.charAt(Math.floor(Math.random() * length));
      

  console.log(pass)
  }
  return pass

}

password()
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
