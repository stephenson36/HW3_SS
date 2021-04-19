// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
    let lCaseTotal = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let uCaseTotal = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let numbersTotal = [0,1,2,3,4,5,6,7,8,9];
    let specialCharTotal = ['~','!','@','#','$','%','^','&','*','_','-','+','=',':',';','<','>','.','?']

    let pLength = window.prompt('Choose length of password between 8 and 128 characters');
    
    if((pLength < 8) || (pLength > 128) || (isNaN(pLength))) {
        return generatePassword();
    }

    let lCase = window.confirm('Include lowercase letters?');
    let uCase = window.confirm('Include uppercase letters?');
    let pNumbers = window.confirm('Include numeric values?');
    let specialChar = window.confirm('Include special characters?');
    
    let passwordOptions = [];

    if(lCase) {
        passwordOptions = passwordOptions.concat(lCaseTotal);
    }
    if(uCase) {
        passwordOptions = passwordOptions.concat(uCaseTotal);
    }
    if(pNumbers) {
        passwordOptions = passwordOptions.concat(numbersTotal);
    }
    if(specialChar) {
        passwordOptions = passwordOptions.concat(specialCharTotal);
    }

    let myPassword = '';
    
    if(passwordOptions.length === 0 ) {
        window.alert('Must select at least one character type');
        return generatePassword();
    } else{
        for(let i =0; i < pLength;i++) {
            myPassword = myPassword.concat(randomByIndex(passwordOptions))
        }
    }

    return myPassword;
}

function randomByIndex(myArray) {
    let index = Math.floor(Math.random() * myArray.length);
    return myArray[index];
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
