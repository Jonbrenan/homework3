







// Assignment Code
let generateBtn = document.querySelector("#generate");


// Almost everything that is working on this page is going on in this GeneratePassword function

function generatePassword (){
  let g = prompt('choose a number between 8 and 128 for the length of your password. If its not between these numbers you are evil and should never use a computer again')
  
  //If statement here making sure the users input is between 8 and 128 characters
  
  if (g >= 8 && g <= 128){
    alert (g)
    length = g


    // these are the potential characters for password
  lower = 'abcdefghijklmnopqrstuvwxyz'
  upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  number = '0123456789'
  sym = '!@#$%^&*()'
  pass = "";

  //these are the true/false statements that will user into choosing the type of password they want
  let upperT = confirm('do you want upper characters?')
  let lowerT = confirm('Do you want lower characters?')
  let numberT = confirm ('do you want numbers?')
  let symT = confirm('do you want symbols?')

  // and here are all the if else statements that actually run the program
  if (upperT && lowerT && numberT && symT){
    for(i=0; i< length/4; i++){
      pass += lower.charAt(Math.floor(Math.random() * lower.length)) + upper.charAt(Math.floor(Math.random() * upper.length)) + number.charAt(Math.floor(Math.random() * number.length)) + sym.charAt(Math.floor(Math.random() * sym.length))
    }
    return pass
  }else if (lowerT && upperT && symT){
    for(i=0; i < length/ 3; i++){
        pass += lower.charAt(Math.floor(Math.random() * lower.length)) + upper.charAt(Math.floor(Math.random() * upper.length)) + sym.charAt(Math.floor(Math.random() * sym.length))
    }
    return pass
  }else if (upperT && symT && numberT){
    for(i=0; i < length/ 3; i++){
        pass += upper.charAt(Math.floor(Math.random() * upper.length)) + sym.charAt(Math.floor(Math.random() * sym.length)) + number.charAt(Math.floor(Math.random() * number.length))
    }
    return pass
  }else if (lowerT && symT && numberT){
    for(i=0; i < length/ 3; i++){
        pass += lower.charAt(Math.floor(Math.random() * lower.length)) + sym.charAt(Math.floor(Math.random() * sym.length)) + number.charAt(Math.floor(Math.random() * number.length))
    }
    return pass
  }else if (lowerT && upperT && numberT){
    for(i=0; i < length/ 3; i++){
        pass += lower.charAt(Math.floor(Math.random() * lower.length)) +  upper.charAt(Math.floor(Math.random() * upper.length)) + number.charAt(Math.floor(Math.random() * number.length))
    }
    return pass
  }else if (upperT && symT){
    for(i=0; i < length/ 2; i++){
        pass += upper.charAt(Math.floor(Math.random() * upper.length)) + sym.charAt(Math.floor(Math.random() * sym.length))
    }
    return pass
  }else if (symT && numberT){
    for(i=0; i < length/ 2; i++){
        pass += sym.charAt(Math.floor(Math.random() * sym.length)) +  number.charAt(Math.floor(Math.random() * number.length))
    }
    return pass
  }else if (lowerT && numberT){
    for(i=0; i < length/ 2; i++){
        pass += lower.charAt(Math.floor(Math.random() * lower.length)) +  number.charAt(Math.floor(Math.random() * number.length))
    }
    return pass
  }else if (lowerT && upperT){
    for(i=0; i < length/ 2; i++){
        pass += lower.charAt(Math.floor(Math.random() * lower.length)) + upper.charAt(Math.floor(Math.random() * upper.length))
    }
    return pass
  }else if (upperT){
    for(i=0; i < length; i++) {
        pass += upper.charAt(Math.floor(Math.random() * upper.length))
    }
    return pass
  }else if (lowerT) {
    for(i=0; i < length; i++){
        pass += lower.charAt(Math.floor(Math.random() * lower.length))
    }
    return pass
  }else if (symT){
    for(i=0; i < length; i++){
        pass += sym.charAt(Math.floor(Math.random() * sym.length))
    }
    return pass
  }else if (numberT){
    for(i=0; i < length; i++){
        number.charAt(Math.floor(Math.random() * number.length))
    }
    return pass
  }

  // this else statement essentially ends the program if the user inputs invalid numbers
  }else alert ('YOU ABSOLUTE EVIL SON OF A GUN!')
  
  
  
  }

password()
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
