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

//function printStars(length:number):void{
//    let toPrint:string = '';
//    for(let i=0; i<length;i++){
//        toPrint += '*';
//    }
//    console.log(toPrint);
//}

//printStars(3);
//printStars(5);
//printStars(1);

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
