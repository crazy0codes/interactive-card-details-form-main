/* Taking variables  */

const Card_form = document.querySelector('form'); // Form
const Card_Name = document.querySelector('.fcard_name'); //Card's Name
const Card_Number = document.querySelector('.fcard_number'); //Card's Number
const input = document.querySelector('#card_m'); //Card's month
const Year = document.querySelector('#cardyear'); //Card's month
const Card_Cvv = document.querySelector('#card_cvv'); //Card's CVV number

/* Errors */

const Card_Year_Error = document.querySelector('.card_m_y_error'); //Displaying the Error for Month and Year
const Card_Cvv_Error = document.querySelector('.card_cvv_error');  //Displaying the Error for CVV
const Card_Name_Error = document.querySelector('.card_name_error');

/* Adding functionality to the form*/

Card_Name.addEventListener("input", checkCardName);
function checkCardName(event) {
    // Convert the card name to uppercase letters
    let Card_Name = event.target;
    let cardName = Card_Name.value.toUpperCase();
    Card_Name.value = cardName;
  
    // Check if the card name contains only letters
    let containsOnlyLetters = /^[A-Z ]+$/.test(cardName);
  
    // Display an error message if the card name contains non-letter characters
    if (!containsOnlyLetters) {
      Card_Name_Error.innerText = "Invalid";
    } else {
      Card_Name_Error.innerText = "";
    }
  }

Card_Number.addEventListener("input", formatCard_Number);
function formatCard_Number(event) {
  let input = event.target;
  let cardNumber = input.value.replace(/\D/g, "");
  let formattedNumber = formatCardNumber(cardNumber);
  input.value = formattedNumber;

  function formatCardNumber(cardNumber) {
    let regex = /(\d{1,4})/g;
    let formattedNumber = cardNumber.replace(regex, "$1 ");
    formattedNumber = formattedNumber.trim();
    return formattedNumber;
  }
}

input.addEventListener('input', dates);
function dates() {
      // Remove any non-numeric characters
      this.value = this.value.replace(/\D/g,"");

      // Ensure length is not greater than 2
      if (this.value.length > 2) {
        this.value = this.value.slice(0, 2);
      }
      else {
        if(this.value>12)
        this.value = 12;
      }
}

Year.addEventListener('input',year);
function year() {
    // Remove any non-numeric characters
    this.value = this.value.replace(/\D/g,"");

    // Ensure length is not greater than 2
    if (this.value.length > 2) {
      this.value = this.value.slice(0, 2);
    }
}

Card_Cvv.addEventListener('input',cardcvc);
function cardcvc() {
  // Remove any non-numeric characters
  this.value = this.value.replace(/\D/g,"");

  // Ensure length is not greater than 3
  if (this.value.length > 2) {
    this.value = this.value.slice(0, 3);
  }
}

Card_form.addEventListener('submit',function(){
  
})