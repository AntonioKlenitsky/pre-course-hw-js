let number1 = Math.floor(Math.random() * 100)
function checkOfNumber(number1){
    if (number1 % 2===0){
        return number1 + ":Это четное число";
    } else  {
        return number1 + ":Это нечетное число";
    }
}
console.log(checkOfNumber(number1));