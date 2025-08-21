// 1)
// write a function that takes in three parameters and returns the sum of those three parameters

// function threeParams(x,y,z):number{
//     return x+y+z;
// }

// console.log(threeParams(3,4,5));

// STATUS - OK
// RETURNED 12

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2)
// write a function that takes in an array and returns the length of the array

// function arrayLength(arr:number[]):number{
//     return arr.length;
// }

// let testArray:number[] = [1,2,3,4,5,6,7,8,9];

// console.log(arrayLength(testArray));

// STATUS - OK
// RETURNED 9

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 3)
// create a function that takes in a string and prints out a greeting.
// e.g. Charles --> "Hi, Charles!"

// function greeting(name:string):string{
//     return "Hi " + name + "!";
// }

// console.log(greeting("Stanley"));

// STATUS - OK
// RETURNED Hi Stanley!


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 4)
// Write a function that prints a single asterisk.

// function printAsterisk(){
//     console.log("*");
// }

// printAsterisk();

// STATUS - OK
// RETURNED "*"

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 5)
// Write a function that takes in two strings and returns the two concatenated
// together. You may not use any String functions.
// example: "abra", "cadabra" returns "abracadabra"

// function concatStrings(text01:string, text02:string):string{
//     return text01.concat(text02);
// }

// console.log(concatStrings("abra", "cadabra"));

// STATUS - OK
// RETURNED "abracadabra"

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 6)

// Write a function that takes in a number and returns the negative of that number.
// example: 5 ---> -5

// function makeNegative(num:number):number{
//     if(num === 0){
//         return 0;
//     }else{
//     return num * (-1);
//     }
// }

// console.log(makeNegative(-1));
// console.log(makeNegative(5));
// console.log(makeNegative(0));

// STATUS - OK
// RETURNED 1, -5, 0

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 7)

// create a function that takes in one string as a parameter and returns that parameter concatenated.
// together three times.
// examples:
// "a" ---> "aaa"
// "beep" ---> "beepbeepbeep"

// function concatText(text:string):string{
//     return text.concat(text).concat(text);
// }


// console.log("Input: a. Output: " + concatText("a"));
// console.log("Input: beep. Output: " + concatText("beep"));


// STATUS - OK
// RETURNED aaa, beepbeepbeep

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 8)

// Write a function that, given a string, "doubles" it. For example, "bun" becomes "bunbun".
// Print out the doubled string to the console.

// function doubleText(text:string):string{
//     return text.concat(text);
// }

// console.log(doubleText("bun"));

// STATUS - OK
// RETURNED bunbun

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 9)
// given a string, create a function that returns the last character in that string.
// examples:
// "cattywampus" --> s

// function returnLast(text:string):string{
//     return text.charAt(text.length-1);
// }

// console.log(returnLast("cattywampus"));

// STATUS - OK
// RETURNED s

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 10)

// create a function that takes in two parameters: "word" and "character".
// The function should surround the word with the character, i.e.
//"apple", "*" ---> "*apple*"
//"beep", "_" ---> "_beep_"
//"basic", "Q" ---> "QbasicQ"

// function surroundString(word:string, char:string):string{
//     return char.concat(word).concat(char);
// }

// console.log(surroundString("apple", "*"));
// console.log(surroundString("bee", "_"));
// console.log(surroundString("basic", "Q"));


// STATUS - OK
// RETURNED *apple*, _bee_, QbasicQ

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 11)

// write a function that returns the area of a circle, given the radius
// Note: Use Math.PI

// function calcArea(radius:number):number{
//     return Math.pow(radius,2) * Math.PI;
// }

// console.log(calcArea(3));

// STATUS - OK
// RETURNED 28,27....

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 12)

// Write a function that takes in one parameter "length" and prints out that many stars.

// example:
// 3 --> ***
// 5 --> *****

// function printStars(length:number):void{
//     let toPrint:string = '';
//     for(let i=0; i<length;i++){
//         toPrint += '*';
//     }
//     console.log(toPrint);
// }

// printStars(3);
// printStars(5);
// printStars(1);

// STATUS - OK
// RETURNED '***', '*****'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 13)

// write a function that takes in one parameter and returns the cube of that parameter

// function calcCube(x:number):number{
//     return x ** 3;
// }

// console.log(calcCube(3));
// console.log(calcCube(5));

// STATUS - OK
// RETURNED 27, 125

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 14)

// Write a function that takes in an array of strings and returns all of them
// concatenated together. You may not use any String functions.
// example:
// ["abra", "cadabra"] returns "abracadabra"
// ["a", "b", "c"] returns "abc"

// let inputOne:string[] = ["abra", "cadabra"];
// let inputTwo:string[] = ["a", "b", "c"];

// function concatArray(input:string[]):string{
//     return input.join('');
// }

// console.log(concatArray(inputOne));
// console.log(concatArray(inputTwo));

// STATUS - OK
// RETURNED "abracadabra", "abc"

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 15)

// write a function that, given an array of both letters and numbers, returns a new array that contains only the letters from the first array.


// let inputArray:(number|string)[] = ["A", 1, "b", 2, 3, 4, "C", "D"];

// function returnCharacters(inArray:(number|string)[]):string[]{
//     let outputArray:string[] = [];
//     for(let i=0; i<inArray.length;i++){
//         if(typeof inArray[i] !== 'number'){
//             outputArray.push(inArray[i] as string);
//         }
//     }
//     return outputArray;
// }

// console.log(returnCharacters(inputArray));

// STATUS - OK
// RETURNED ['A', 'b', 'C', 'D']

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 16)

// create a function that takes in two strings and prints out the first letter in each of them.

// examples:
// "happy", "face" ---> "hf"
// "abra", "cadabra" ---> "ac"

// function returnFirst(txt01:string, txt02:string):string{

//     return txt01.charAt(0).concat(txt02.charAt(0));
// }

// console.log(returnFirst("happy", "face"));
// console.log(returnFirst("abra", "cadabra"));

// STATUS - OK
// RETURNED "hf", "ac"

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 17)

// write a function that determines the ‘nth’ triangle number.
/**
 * For example, f(4) = 10 and f(5) = 15
 * A triangle number is the number of
 * dots in a given triangle (shown below)
 *    .
 *   . .
 *  . . .
 * . . . .
 * imagine bowling pins
 */


// function nthTriangle(f:number):number{
//     let count = 0;
//     for(let i=1;i<=f;i++){

//         count += i;
        
//     }
//     return count;
// }

// console.log(nthTriangle(4));
// console.log(nthTriangle(5));

// STATUS - OK
// RETURNED 10, 15

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 18)
// Write a function that checks a Sudoku row for correctness

// let sudoku:number[][] = [
//     [1,2,3,4,5,6,7,8,9], 
//     [2,3,4,5,6,7,8,9,1],
//     [3,4,5,6,7,8,9,1,2],
//     [4,5,6,7,8,9,1,2,3],
//     [5,6,7,8,9,1,2,3,4],
//     [6,7,8,9,1,2,3,4,5],
//     [7,8,9,1,2,3,4,5,6],
//     [8,9,1,2,3,4,5,6,7],
//     [9,1,2,3,4,5,6,7,8]    
// ];

// function checkArr(arr:number[][]):string|void{
//     for(let x=0;x<arr.length;x++){
//         let elements = new Set<number>(arr[x]);
//         if(arr[x].length!=9){
//                 return 'Row: ' + (x+1) + ' has wrong length. Should have 9 elements.';
//         }
//         else if(arr.length!=9){
//                 return 'The length of sudoku is wrong. Should have 9 rows.';
//         }
//         else if(elements.size !== arr[x].length){
//                 return 'duplicate number in a row: ' + (x+1) + '.';
//             }
//     }
//     return 'ok';
// }

//console.log(checkArr(sudoku));

// STATUS - OK
// RETURNED... correct answer.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 19)

// Write a function that takes in two integers and returns the one which is
// closest to 0. If they are the same distance from 0, return either of them.
// example:
// 2, 3 returns 2
// -5, 6 returns -5
// -1, -1 returns -1

// function checkDistance(x:number, y:number):number[]|number{
//     if(Math.abs(x) === Math.abs(y)){
//         return [x,y];
//     }
//     else if(Math.abs(x) < Math.abs(y)){
//         return x;
//     }
//     else{
//         return y;
//     }
//     return [];
// }
// console.log(checkDistance(2,3));
// console.log(checkDistance(-5,-6));
// console.log(checkDistance(-1,-1));

// STATUS - OK
// RETURNED: 2,-5, -1-1.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 20)
// create a function that takes in three booleans as parameters. If any two are
// true and one is false, return true. Otherwise, return false.
// e.g.
// true, true, false --> true
// true, false, false --> false
// true, false, true --> true
// false, false, false ---> false

// function boolChecker(x:boolean, y:boolean, z:boolean):boolean{
//     if(!x&&!y&&!z){
//         return false;
//     }
//     else if(x&&y&&z){
//         return true;
//     }
//     else{
//         return true;
//     }

//     return true;
// }

// console.log(boolChecker(true, true, false));
// console.log(boolChecker(true, false, true));
// console.log(boolChecker(false, true, true));
// console.log(boolChecker(false, false, false));
// console.log(boolChecker(true, true, true));


// STATUS - OK
// RETURNED: true, true, true, false (+ true for all input true); 

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 21)

// Level 1
// create a function that determines the nth fibonacci number. A fibonacci number is defined as
// the sum of the previous two fibonacci numbers, i.e. the sequence goes 0, 1, 1, 2, 3, 5, 8, 13, 21 ...

// examples:
// fibonacci(1) returns 0
// fibonacci(5) returns 3
// fibonacci(8) returns 13

// function nthFibonaci(input:number):number{

//     if(input<0){
//         throw new Error('fdsfdfsd');
//     }
//     if(input===0){
//         return 0;
//     }
//     if(input===1){
//         return 1;
//     }
//         let prev = 0;
//         let current = 1;
//         for(let i=2;i<input;i++){
//             let next = prev + current;
//             prev = current;
//             current = next;
//         }
//         return current;
// }

// console.log(nthFibonaci(0));
// console.log(nthFibonaci(5));
// console.log(nthFibonaci(8));

// STATUS - OK
// RETURNED: 0, 3, 13

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 22)

// given an array of integers, write a function that finds the average and returns it.
// examples:
// [1,2,3] --> 2
// [1,2,4] --> 2.3333

// let inArray_01:number[] = [1,2,3];
// let inArray_02:number[] = [1,2,4];

// function calcAverage(inputData:number[]):number{
//     let sum = 0;
//     for(let i=0;i<inputData.length;i++){
//         sum = sum + inputData[i];
//     }

//     return (sum/inputData.length)
// }

// console.log(calcAverage(inArray_01).toFixed(2));
// console.log(calcAverage(inArray_02).toFixed(2));

// STATUS - OK
// RETURNED: 2, 2.33 

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 23)

// You're trying to create a paginator that splits up your items into pages.
// First, given a total number of items, determine how many pages you need to create
// if there's supposed to be 50 items on a page.

// examples:
// 45 --> 1
// 100 --> 2
// 101 --> 3

// function paginator(items:number, onPage:number):number{
//     return Math.ceil(items/50);
// }

// console.log(paginator(45,50));
// console.log(paginator(100,50));
// console.log(paginator(101,50));

// STATUS - OK
// RETURNED: 2, 2.33 

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 24)

// write a function that takes in an array of numbers and checks
// whether each number is less than the previous one.
// Return true if all of them fit this condition.

// let inputData01:number[] = [6,5,4,3,2,1];
// let inputData02:number[] = [6,5,4,8,2,1];

// function checkIfLess(inData:number[]):boolean{
//     for(let i=1;i<inData.length;i++){
//         if(inData[i]>=inData[i-1]){
//             return false;
//         }
//     }
//     return true;
// }

// console.log(checkIfLess(inputData01));
// console.log(checkIfLess(inputData02));

// STATUS - OK
// RETURNED: true, false

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 25)

// Determine whether a given string is a palindrome. "radar", "racecar", "kayak" are all palindromes.

function checkPalindrome(inputString:string):boolean{
    for(let i=0;i<inputString.length;i++){
        if(inputString[i]!=inputString[inputString.length-i]){
            console.log(inputString[i] + ' : ' + inputString[(inputString.length-i)-1]);
            console.log(i + ' : ' + (inputString.length-i-1));
            return false
        }
    }
    return true;
}

console.log(checkPalindrome('radar'));
console.log(checkPalindrome('racecar'));
console.log(checkPalindrome('kayak'));


