
//multiple of 9

var number = prompt('Enter the number')

if (number % 9 == 0)
	document.write('Multiple of 9')
else 
  document.write('Not multiple of 9')



  //ascending order
var ascendingnumber = [500, 450, 400, 350, 300, 250, 200, 150, 100, 50, 0];
numbersAscending = ascendingnumber.sort(function (a, b) {
    return a - b;
});
console.log(`Ascending:`, ...ascendingnumber);


//sum of digit 
let numbers = 398;
let sum = 0;
while (numbers > 0) {
    let rem = numbers % 10;
    sum = sum + rem;
    numbers = parseInt(numbers / 10)
}
console.log(`Sum of digit:`, sum);

function clickhandle() {
    var email = document.querySelector('#emailid').value;
    var password = document.querySelector('#passwordid').value;

    email == 'erazizeee@gmail.com' && password == 2949 ? alert("sucess") : alert('not valid')
}