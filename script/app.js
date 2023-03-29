function getpin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }
    else{
        return getpin();
    }
};

function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
};

document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getpin();
    // display pin
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
});

document.getElementById('calculator').addEventListener('click', function(event){
    const number = event.target.innerText;
    const typedNumberField = document.getElementById('typed-numbers');
    const previousTypedNumber = typedNumberField.value;
    if(isNaN(number)){
        if(number === 'C'){
            typedNumberField.value = '';
        }
        else if (number === '<'){
             const digits = previousTypedNumber.split('')
             digits.pop();
             const remainingDigits = digits.join('');
             typedNumberField.value = remainingDigits;
        }
    }
    else{
        const newTypedNumber = previousTypedNumber + number;
        typedNumberField.value = newTypedNumber;
    }
});

document.getElementById('verify-pin').addEventListener('click', function(){
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;

const typeNumberField = document.getElementById('typed-numbers');
const typednumber = typeNumberField .value;

if(currentPin ==  typednumber){
    const pinSuccessMessage = document.getElementById('pin-success');
    pinSuccessMessage.style.display = "block";
}
else{
    const pinUnsuccessMessage = document.getElementById('pin-unsuccess');
    pinUnsuccessMessage.style.display = "block";
}
})