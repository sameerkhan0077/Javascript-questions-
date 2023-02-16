//1. Create Bill Calculator
// Ask below Questions
// How many french fries (60rs per piece) do you want to order ?
// How many burgers (50rs per piece) do you want to order ?
// How many plates of chowmin (100rs per plate) do you want to order?
// How many plates of Manchurian (80rs per plate) do you want to order?
// How many Cokes (50 per piece) do you want to order ?
// Use can enter any number of quantities. Calculate the bill based on the quantities entered and item prices. If user enteres 0 or negative value then consider item count as 0.

let frenchFries =Number(prompt("how many frencgFries(60rs per piece) do you want to order"));
let totalfrenchfries =frenchFries*60
console.log(totalfrenchfries);

let burgers =Number(prompt("how many burgers(50rs per piece) do you want to order"));
let totalburgers = burgers*50
console.log(totalburgers);


let chowmin =Number(prompt("how many plate chowmin(100rs per plate) do you want to order"));
let totalchowmin = chowmin*100
console.log(totalchowmin);

let manchurian =Number(prompt("how many plate manchurian(80rs per plate) do you want to order"));
let totalmanchurian = manchurian*80
console.log(totalmanchurian);

let cokes =Number(prompt("how many Cokes(50rs per piece) do you want to order"));
let totalcokes = cokes*50
console.log(totalcokes);

console.log(`All totle bill paymts ${totalburgers+totalchowmin+totalcokes+totalfrenchfries+totalmanchurian}`)*/

// 2
// Print below Pattern
// $##$##$
// $##$##
// $##$
// $##
// $
 for(let i =5;i>1;i--){
     let sybl ="";
     for(let j=0;j<=i;j++){
       if(j%2!==0){
            sybl= sybl+"$"
        }else if(j%2==0){
            sybl =sybl+"#"
        }
    }
     console.log(sybl)
 }

// 4
// Using a switch case to do this exercise

// If number is odd then print Odd
// If number is even then print Even
// If number is 100 then print 100
// Else print 10000
let number1 = 2;
switch (number1%2==0) {
    case true:
        console.log("Even")  
        break;
        case false:
        console.log("odd");
        break;
         case 100:
         console.log("100")
         break;
         case 1000:
             console.log("1000")
     default:
         console.log("close");
 } 


//  5
// Ask user his/her birth year, "What is your birth year?"
// If user age is greater than 18 then ask user "Do you have valid license number?" If user click on Okay then ask for his license number and finally in the alert show message "User with license number #### is ready to drive.
// If user age is less than 18 then ask him question in confirm box "Do you have gaurdians ?"" If user says yes then ask his/her Gaurdian name and then in alert show "You are ready to drive with your #### (show gaurdian name here.)" Else show "Sorry visit again please." in alert box
 let user = Number(prompt( "What is your birth year?"));
 if(user>18){
     confirm("Do you have valid license number?");
     let userlicense=prompt("enter your license Number?");
     alert(`your license number${userlicense}you are ready  to drive`);
 }else if(user<18){
     const hasGuardians = confirm("Do you have guardians?");
     if(hasGuardians){
         let usergaurdinas = prompt("Enter your gaurdians Name?");
     alert(`You are ready to drive with your ${usergaurdinas}`)

     }else{
         alert("no gaurdinas")
     }
    
 }else{
 alert("sorry visit again please")
 }

// 6 
// Take any number and take other number as 19. Now check their difference by subtracting each other. If both numbers difference is greater than 19 then print triple their absolute difference else print double their absolute difference.
 const num1 =Number(prompt("Enter your first number"));
 const num2= Number(prompt("ENter your scond number"));;
 const ans =num1-num2;
 console.log(ans);
 if(ans>19){
     console.log(ans*3)
 }else{
     console.log(ans*2);
 }

//  7
// Write a JavaScript program to check from two given integers, whether one is positive and another one is negative.If yes then print sum of both the numbers Else print multiplication of both numbers
 let num1 =10;
 let num2 =4;
 if(num1<0 && num2<0 || num1>0 && num2>0){
     console.log(num1+num2)
 }else{
     console.log(num1*num2)
 }


//  8
// Write a JavaScript program to check if out of 4 numbers any two numbers are same or not. If yes then print Yes else print No
  let num1 =10;
 let num2=20;
 let num3=40;
 let num4=40;
 if(num1 ==num2 ||num2==num3 || num3==num4 || num4==num1 || num3==num1 ||num4== num2){
     console.log("yes");

 }else{
     console.log(num1,num2,num3,num4)
 }



//  9
// Write a program to check if a number is palindrome or not. It means 141 and 12221 both are examples of palindrome number. If number is palindrome then print yes else print no
 let str = 12221;
 let palindrome = ""; let strNumber=str.toString()
 console.log(strNumber)
 let strArr = [...strNumber];
 console.log(strArr)
 for (let i = strArr.length - 1; i >= 0; i--) {
     palindrome = palindrome + strArr[i];
 }
 if (palindrome === strNumber) {
   console.log("Yes");
 } else {
   console.log("No");
 }


//  10 
// Take a String and check its length. If string length is greater than 10 then print from 1 to length of the string. else print No
 let string = "wecode";
 let striglength = string.length;
 if(striglength>10){
     console.log(string)
 }else{
     console.log(striglength)
 }

