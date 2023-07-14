// 1. Given an array of numbers. Write a function to separate odd and even numbers in
// different arrays.

function separateOdds(arr){
    let odds = [];
    let evens = []
    for(let i in arr){
        if(arr[i] % 2 == 0){
            evens.push(arr[i])
        }else{
            odds.push(arr[i])
        }
    }
    console.log(evens);
    console.log(odds);
}

separateOdds([2, 4, 5, 6, 7])

// 2. Write a function that calculates sum, difference, multiplication and division between
// given array elements depending on passed operation symbol. Write appropriate function
// for each operation.

function caclulateIt(arr, opr){
    let res = 0;
    if(opr == "+"){
        for(let i = 0; i < arr.length; i++){
            res += arr[i]
        }
    }else if(opr == "-"){
        for(let i = 0; i < arr.length; i++){
            res -= arr[i]
        }
    }else if(opr == "*"){
        res = 1
        for(let i = 0; i < arr.length; i++){
            res *= arr[i]
        }
    } else if(opr == "/"){
        res = arr[0];
        for(let i = 1; i < arr.length; i++){
            res /= arr[i]
        }
    } else{
        console.log("Invalid operation");
    }
    return res
}

caclulateIt([2, 5, 6], "+")

// 3. Write a function which receives two strings and removes appearances of the second
// string from the first one.
function removeText(str, str2){
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] == str2){
            count += 1
        }
    }
    for(let r = 0; r <= count; r++){
        str = str.replace(str2, "")
    }
    return str
}

removeText("hello", "l")

// 4. Given an object. Invert it (keys become values and values become keys). If there is
// more than key for that given value create an array.


function invertObj(obj){
    let res = {};
    for(let key in obj){
      res[obj[key]] = key;
    }
    return res;
}

invertObj({a:5, b:6})

// 5. Given two objects. Write a function that performs shallow compare.
function objectCompare(object1, object2) {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
  
    if (keys1.length !== keys2.length) {
      return false;
    }
  
    for (let key of keys1) {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  
    return true;
  }

objectCompare({a:1, b:2}, {a:1, b:1})