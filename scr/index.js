let Card_Number = document.querySelector('.fcard_number');
const Card_form = document.querySelector('form');
const Card_Cvv = document.querySelector('#card_cvv');
const Card_Month = document.querySelector('#card_m');
const Card_Year_Error = document.querySelector('.card_m_y_error');
const Card_Cvv_Error = document.querySelector('.card_cvv_error');
const Card_Name = document.querySelector('.fcard_name');

Card_Cvv.setCustomValidity("Hi");

Card_form.addEventListener('input',function(){
    Card_Name.value = Card_Name.value.toUpperCase(); //Name
    if(Card_Month.value > 12 || typeof Card_Month.value === 'number'){
        Card_Year_Error.innerHTML = 'not valid';
    }
    else {
        Card_Year_Error.innerHTML = " ";
    }
})

