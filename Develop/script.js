// Assignment code here
function generatePassword(){
  var length = 0;
  var includeUpperCase, includeLowerCase, includeNumbers, includeSpecial;
  var potentialChars = [];
  var pw = "";
  // while the condition is true, everything in the curly brackets will be repeated
  while (!(length < 129 && length > 7)){
    // parseInt takes the string returned from the prompt function and converts it to a number
    length = parseInt(prompt("How long would you like your password to be?"));
  }
  // this condition will only be true if all the booleans in it are false
  while (!(includeLowerCase || includeNumbers|| includeSpecial 
    || includeUpperCase)){
      // each of the next lines takes the answer to the yes or no question and sends it to the translating function
    includeLowerCase = translateAnswer(prompt("Does your password have lowercase letters?"));
    includeUpperCase = translateAnswer(prompt("Does your password have uppercase letters?"));
    includeNumbers =translateAnswer(prompt("Does your password have numbers?"));
    includeSpecial=translateAnswer(prompt("Does your password have special characters?"));
  }
  if(includeLowerCase){
    potentialChars.push("a", "b", "c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");
  }
  if(includeUpperCase){
    potentialChars.push("A", "B", "C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");
  }
  if(includeNumbers){
    potentialChars.push(0,1,2,3,4,5,6,7,8,9)
    
  }
  if (includeSpecial){
    potentialChars.push( " ", "!",'"',"#","$","%","&","'","(",")","*","+","-",",",".","/",":",";","<",">","=","?","@","[","]","^","_","}","{","|","~");
  }
  for(var i = 0; i < length;i++){
    pw += potentialChars[Math.floor(Math.random() * potentialChars.length)];
  }
  return pw;

}

function translateAnswer(ans){
  // function takes user input that answers a yes or no question and translates it to true or false
  ans = ans.toLowerCase();
  if((ans == "yes") || (ans == "ok") || (ans == "true") || (ans == "y")){
    return true;
  }
  return false;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
