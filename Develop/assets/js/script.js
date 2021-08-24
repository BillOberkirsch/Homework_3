// Assignment Code
var generateBtn = document.querySelector("#generate");

var lengthOfPassword = 0;

var bLowerCases = false;
var bUpperCases = false;
var bNumbers = false;
var bSpecialCharacters = false;

/* var lowerCaseAry = ['a','b','c','d','e','f','g', 'h', 'i', 'j', 'h', 'i', 'j', 'k', 'l', 'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseAry = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'H', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var numbersAry =['1','2','3','4','5','6','7','8','9','0'];
var specialCharactersAry = ['!','@','#','$','%', '^','&']; */
var lowerCaseAry = 'abcdefghijhijklmnopqrstuvwxyz';
var upperCaseAry = 'ABCDEFGHIHKLMNOPQRSTUVWXYZ';
var numbersAry ='1234567890';
var specialCharactersAry = '!@#$%^&';


var valuesToUse = '';

// Write password to the #password input
function writePassword() {
  reset_vars();
  var password = "";
  if(get_LengthOfPwd())
  {
    if(get_ValuesToUse())
    {
      password = generatePassword(password);
    }

    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }
}

function reset_vars(){
  valuesToUse = '';
  lengthOfPassword = 0;
  bLowerCases = false;
  bUpperCases = false;
  bNumbers = false;
  bSpecialCharacters = false;
}

function generatePassword(password)
{
  var str = valuesToUse;
    
  for (i = 1; i <= lengthOfPassword; i++) {
      var char = Math.floor(Math.random()
                  * str.length + 1);
        
      password += str.charAt(char)
  }
  return password;
}

function get_LengthOfPwd()
{
  var bPassed = false;
  lengthOfPassword = parseInt( prompt("length of password must be between 8 and 128 ", "Enter a number 8 through 128.", "0"), 10);

  if (lengthOfPassword.valueOf().toString() !== 'NaN')
  {
    if(lengthOfPassword < 8 || lengthOfPassword > 128)
    {
      alert("length must be between 8 and 128");
    }
    else
    {
      bPassed =true;
    }
  }
  else
  {
    alert( "The input was not a number, must enter in a number.")
  }
  return bPassed;
}

function get_ValuesToUse(){
  var bConfirm = false;
  bLowerCases = confirm("Do you want to use lower case characters?");
  bUpperCases = confirm("Do you want to use upper case characters?");
  bNumbers = confirm("Do you want to use numbers?");
  bSpecialCharacters = confirm("Do you want to use special characters?");

  var strConfirm = "Please confirm that you want to use ";
  if(bLowerCases)
    {
      strConfirm += "lower case ";
      valuesToUse += lowerCaseAry;
    }
  if(bUpperCases)
    {
      strConfirm += "upper case ";
      valuesToUse += upperCaseAry;
    }
  if(bNumbers)
    {
      strConfirm += "numbers ";
      valuesToUse += numbersAry;
    }
  if(bSpecialCharacters)
    {
      strConfirm += "special characters "
      valuesToUse += specialCharactersAry;
    }

  bConfirm = confirm(strConfirm + " to generate your password.");
  if(bConfirm)
  {
    alert("values to use: " + valuesToUse);
  }
  else
  {
    valuesToUse = "";
  }
  return bConfirm;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
