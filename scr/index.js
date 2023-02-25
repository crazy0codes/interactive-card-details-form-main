/* Taking variables  */

const Card_form = document.querySelector('form'); // Form
const Card_Name = document.querySelector('.fcard_name'); //Card's Name
const Card_Number = document.querySelector('.fcard_number'); //Card's Number
const Card_Month = document.querySelector('#card_m'); //Card's year and month
const Card_Cvv = document.querySelector('#card_cvv'); //Card's CVV number

/* Errors */

const Card_Year_Error = document.querySelector('.card_m_y_error'); //Displaying the Error for Month and Year
const Card_Cvv_Error = document.querySelector('.card_cvv_error');  //Displaying the Error for CVV
const Card_Name_Error = document.querySelector('.card_name_error');

/* Adding functionality to the form*/

Card_form.addEventListener('input',function(){

//Card's Number dividing after 4 digits
if(Card_Number.value == '\b'){
    alert("User entered the BackSpace")
}

})

// Card_Name.addEventListener('input',
// function(){
//    //Converting the Card's Name to UpperCase letters
//    Card_Name.value = Card_Name.value.toUpperCase(); 

//    //Removing the xharacters that are not Letters
//    let Card_Name_len = Card_Name.value.length;
//    let latestLetter = Card_Name.value[Card_Name_len-1]
//    let Check = function(latestLetter) {
//     return /[A-Z]/.test(latestLetter);
//   }
//   let isLetter = Check(latestLetter);
//   if (isLetter) {
//     alert("It is a letter");
//   } else {
//     alert("It is not a letter");
//   }
//   })

Card_Name.addEventListener("input", checkCardName);
function checkCardName(event) {
    // Convert the card name to uppercase letters
    let Card_Name = event.target;
    let cardName = Card_Name.value.toUpperCase();
    Card_Name.value = cardName;
  
    // Check if the card name contains only letters
    let containsOnlyLetters = /^[A-Z]+$/.test(cardName);
  
    // Display an error message if the card name contains non-letter characters
    if (!containsOnlyLetters) {
      Card_Name_Error.innerText = "Invalid";
    } else {
      Card_Name_Error.innerText = "";
    }
  }
  
  
  