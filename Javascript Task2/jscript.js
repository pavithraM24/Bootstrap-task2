//Decalring two variables
/*var name = 'Pavithra M'
var age = 23
//Declaring constants
const address = "No: 15, Adyar, Chennai-TamilNadu"
const phone_number = 0912456789
//consoling those 2 variables and constants
console.log("My Name is :", name)
console.log("My Age is :", age)
console.log("My address is :", address)
console.log("Contact details :", phone_number)




//Declaring the variable 1 in string
var number_one = "130"
//Converting the string variable into Number
var number = Number("130")
console.log("Number one is :" , number)
console.log("Type of the number one:", typeof number)
//Declaring the variable 2 in Number/float
const pi_value = 3.14
console.log("Number two is :", pi_value)
//adding two variable
console.log("Total is:" , number + pi_value)*/


//TASK 3 

//Declaring two strings
let string_one = "Javascript" //string
console.log("The string1 is:", string_one)
let string_two = "Introduction" //string
console.log("The string2 is:", string_two)
//concatenating those two strings into a single string
console.log("Merging the two strings:", string_one + " " + string_two)
//printing first letter of both the strings
let char = string_one.charAt(0);
console.log("The first letter of string1 is:", char)
let char1 = string_two.charAt(0);
console.log("The first letter of string2 is:", char1)
//Using for loop to reverse the two strings
let rev = string_one.split('').reverse().join('')
console.log("The reversed string1 is:", rev)
let rev1 = string_two.split('').reverse().join("")
console.log("The revrsed string2 is:", rev1)
//Finding the length of the string
let string_len = string_one.length
let string_len1 = string_two.length
console.log("Length of the string is:", string_len, string_len1)

//Declaring new string
var string_text = "I love chocolates" //string
//finding the index value of letter "a"
let result = string_text.indexOf("a")
console.log("The index value of letter a is:", result)
//find the occurrence of letter 'a'
var string_text1 = "Javascript is a interpreted compiled programming language";//string
      const count = (string_text1.match(/a/g)).length;
      console.log(count);
//declaring one number variable
var num = 4 //number
console.log("Before adding the prefix value:", num)
//Printing the number prefix
var prefix = "$" //string
console.log("After adding the prefix value:", prefix + num)

//Declaring two number variable
var numOne = 24 //number
console.log("The num1 is:", numOne)
var numTwo = 12 //number
console.log("The num2 is:", numTwo)
//Adding those two variables
console.log("The total is:", numOne + numTwo)
console.log("The difference is:", numOne - numTwo)
console.log("The multiplication value is:", numOne * numTwo)
console.log("The division value is:", numOne / numTwo)

//Declaring float num and integer num
var num_three = 17.5 //float/decimal
var num_four = 17 //number
//converting float num to string
let num_float = parseInt(num_three)
console.log("The float value is:", num_three)
console.log("The converted integer value is:", num_float) 
//Rounding off the float number
let num_round = Math.round(num_three)
console.log("The float value is:", num_three)
console.log("The roundoff value is:", num_round) 
//converting integer to float num
let num_int = parseFloat(num_four)
console.log("The integer value is:", num_four)
console.log("The converted float value is:", num_int) 
//adding float num and integer num
console.log("The float value is:", num_three)
console.log("The integer value is:", num_four)
console.log("The total value is", num_three + num_four)
