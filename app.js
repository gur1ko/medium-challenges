//medium challenges

// 1) return the first one if it is falsy, otherwise return the second one.

/* function falsyOrTruthy(elem1, elem2) {
    return (!elem1) ? elem1 : elem2;
}

console.log(falsyOrTruthy(10, 5)); */


//////////////////////////////////////
// 2) 
/* 
function arrLength(arr) {
    return arr.length
}
console.log(arrLength([12, 1, 5])); // to work we need [] this brackets  */


/////////////////////////////

// 3) calculate the sum in array

/* function arrSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; ++i) {
        sum = sum + arr[i];
    }
    return sum
}

console.log(arrSum([5, 1, 50])) */


///////////////////////////
// 5) add up the numbers from a single number 

/* function progressiveSum(num) {
    let sum = 0;
    for (let i = 0; i <= num; ++i) {
        sum = sum + i;
    }
    return sum
}

console.log(progressiveSum(5))

 */

///////////////////////////////
// 

// 6) calculate the time (ex : 66 min = '01:06')
/* 
function calcTime(seconds) {
    
    if (Math.floor(seconds/60) < 10) {
        return `0${Math.floor(seconds/60)}:${seconds % 60}`;
    }
        else {
        return `${Math.floor(seconds/60)}:${seconds % 60}`;
    }
}
console.log(calcTime(130)) */

// he did it otherwise but I prefer mine.


////////////////////////////////////////////
// 7) find the largest number 

/* function getMax(arr) {
    let max = arr[0]; // [0] - is a starter position
for (let i = 0; i < arr.length; ++i){
    if (arr[i] > max) { // here we say, if the num2 from position [1] is larger than num1 from position [0] then we can produce the outcome and say that max = arr[i]
        max = arr[i];
    }
}
return max;
}
console.log(getMax([1, 3, 9])); */


////////////////////////////////////
// 8) Reverse a string

function reverseString(str) {
    let reversedString = '';
for (let i = 0; i < str.length; ++i) {
    reversedString = str[i] + reversedString 
}
return reversedString;
}
console.log(reverseString('gurami'))













