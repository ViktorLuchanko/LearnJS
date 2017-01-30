// /array task - 1
// console.log(arr[arr.length-1]);


// /array task - 2
console.log();
console.log("task - 2");

const arr = ["this", "is", 1, "array"];
arr.push("computer");
console.log(arr);


// /array task - 3
console.log();
console.log("task - 3");

const style = ["Джаз", "Блюз"];
style.push("Рок-н-рол");
style[style.length - 2] = "Ккласика";
console.log(style.shift());
style.unshift("Рэп", "Регги");
console.log(style);


// /array task - 4
console.log();
console.log("task - 4");

const arrFruit = ["Яблоко", "Апельсин", "Груша", "Лимон"];
let random = Math.floor(Math.random() * (arrFruit.length));
console.log("random: " + random + ", arr: " + arrFruit[random]);


// /array task - 6
console.log();
console.log("task - 6");

const arrFind = ["test", 2, 1.5, false];

function find(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) return i;
    }
    return -1;
}


console.log(find(arrFind, "test")); // 0
console.log(find(arrFind, 2)); // 1
console.log(find(arrFind, 1.5)); // 2
console.log(find(arrFind, 0)); // -1


// /array task - 7
console.log();
console.log("task - 7");

function filterRange(arr, a , b) {
    const copyArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(a <= arr[i] && arr[i] <= b) copyArr.push(arr[i]);
    }
    return copyArr;

}

const arrRange = [5, 4, 3, 8, 0];
const arrFiltered = filterRange(arrRange, 3, 5);
console.log(arrFiltered);

// /array task - 9
console.log();
console.log("task - 9");

function getMaxSubSum(arr) {
    let maxSum = 0;
    for (let i = 0; i < arr.length; i++) {
        let startSum = 0;
        for (let j = i; j <arr.length; j++) {
            startSum += arr[j];
            maxSum = Math.max(maxSum, startSum);
        }
    }
    return maxSum;
}
console.log( getMaxSubSum([-1, 2, 3, -9])); // 5
console.log( getMaxSubSum([-1, 2, 3, -9, 11])); // 11
console.log( getMaxSubSum([-2, -1, 1, 2])); // 3
console.log( getMaxSubSum([1, 2, 3])); // 6
console.log( getMaxSubSum([100, -9, 2, -3, 5]));



















