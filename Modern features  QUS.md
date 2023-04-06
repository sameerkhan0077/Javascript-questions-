###   Modern features  ###     
1.Write a function that takes a string and returns a new string with all the words reversed using the spread operator.
```
function rstring([...str]){
    return str.reverse().join("");
  }
  console.log(rstring("WeCode"));
  ```
  2. Create a function that takes in an array and uses the rest operator to remove the first element from the array and finally return the array without first element.
  ```
   function arrayres(arr){
    let[,...a] =arr
    return a
  }
  console.log(arrayres([1,2,3,4,5,6]))
  ```
  3.Create a function that takes in an unknown number of arrays and uses the rest operator to flatten them into a single array.
  ```
   function arrayflat(...a){
    return a.flat();

  }
  console.log(arrayflat([1,2,3,4],[9,8,7,6,5],[4,5,6]));
  ```
  4. Write a function that takes an object as a parameter and returns the value of its "x" property if it exists, otherwise it returns null. Hint : (Use optional chaining).
  ```
  function chaining(obj){
    return obj?.x || null;
   }
   console.log(chaining({}));
```
5.Write a function which takes in an array and create two separate arrays for odd numbers and even numbers and finally merge them in the order that all odd numbers will move to the left of the array and all even numbers to right of the array.

6.Create an array of numbers. Now change the position of each element with their next element.

7.Ask user below questions
What is your age  : 12
What is your mobile : 9581894461
What is your address : Jaipur
Now create an object and use enhanced object literal property computation to create below object
```
let personAge = Number(prompt("What is your age?"));
   let personMobaileN = Number(prompt("What is your mobile?"));
   let personAddress = prompt("What is your address?");
   
   let obj = {
    age : personAge,
    mobaile : personMobaileN,
    address :personAddress,
   }
   console.log(obj);
   ```
   8.Using enhanced object literal function, create a function sum which takes an array as parameter and return sum of all the numbers in the array.
   ```
      function arraySum(arr){
    return arr.reduce((val,total) =>val+total)}

    console.log(arraySum([10,20,30,40,50]));
    
    ```
    9.
