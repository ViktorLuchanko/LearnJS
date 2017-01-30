// /array-methods task 1
console.log("task-1");


const obj = {className: 'open menu'};
function addClass(obj, cls) {
    let classes = obj.className ? obj.className.split(" ") : [];
    for (var i = 0; i < classes.length; i++) {
        if (classes[i] === cls || cls === "") return;
    }
    classes.push(cls);
    return obj.className = classes.join(' ');
    // console.log(arr);
}
addClass(obj, '');
addClass(obj, 'new');
addClass(obj, 'open');
addClass(obj, 'me');
console.log(obj.className);


// /array-methods task 2
console.log();
console.log("task-2");

function camelize(str) {
    let arr = str.split("-");
    for (let i = 1; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return arr.join('');
}
console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));


// /array-methods task 3
console.log();
console.log("task-3");

function removeClass(obj, cls) {
    let arr = obj.className ? obj.className.split(' ') : [];
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== cls || cls === '') arr2.push(arr[i]);
    }
    return obj.className = arr2.join(' ');
}
const obj2 = {
    className: 'my menu menu class'
};
removeClass(obj2, 'menu');
removeClass(obj2, 'blabla');
console.log(obj2);


// /array-methods task 4
console.log();
console.log("task-4");

function filterRangeInPlace(arr, number, number2) {
    // for (let i = 0; i < arr.length; i++) {
    //     if(number >= arr[i] || arr[i] >= number2) {
    //         arr.splice(i, 1);
    //     }
    // }
    let arrCopy = arr.slice();
    arr.length = 0;
    for (let i = 0; i < arrCopy.length; i++) {
        if (number <= arrCopy[i] && arrCopy[i] <= number2) arr.push(arrCopy[i]);
    }
}
const arrFiltered = [5, 3, 8, 1];
filterRangeInPlace(arrFiltered, 1, 4); // удалены числа вне диапазона 1..4
console.log(arrFiltered);


// /array-methods task 5
console.log();
console.log("task-5");

// function reversArr(arrRevers) {
//     arrRevers.sort();
//     return arrRevers.reverse();
// }
const arrRevers = [5, 2, 1, -10, 8];
function reversArr(a, b) {
    return b - a;
}
arrRevers.sort(reversArr);
console.log(arrRevers);

// /array-methods task 6
console.log();
console.log("task-6");

const arrStr = ["HTML", "JavaScript", "CSS"];
const arrSorted = arrStr.slice().sort();
console.log(arrSorted);
console.log(arrStr);


// /array-methods task 7
console.log();
console.log("task-7");

function randomSort() {
    return Math.random() - 0.5;
}
const arrRandom = [1, 2, 3, 4, 5];
console.log(arrRandom);
arrRandom.sort(randomSort);
console.log(arrRandom);


// /array-methods task 8
console.log();
console.log("task-8");

function sortArrAge(arr) {
    arr.sort((a, b) => {
        return a.age - b.age;
    })
}
const vasya = {name: "Вася", age: 23};
const masha = {name: "Маша", age: 18};
const vovochka = {name: "Вова", age: 6};
const people = [masha, vasya, vovochka];
console.log(people);
console.log('array after sort:');
sortArrAge(people);
for (let i = 0; i < people.length; i++) {
    console.log(people[i].name);

}


// /array-methods task 9
console.log();
console.log("task-9");

function printList(list) {
    let tmp = list;
    while (tmp) {
        console.log(tmp.value);
        tmp = tmp.next;
    }
}
function printListRecursion(list) {
    console.log(list.value);
    if (list.next) {
        printListRecursion(list.next)
    }
}
function printReverseList(list) {
    let tmp = list;
    const arr = [];
    while (tmp) {
        arr.push(tmp.value);
        tmp = tmp.next;
    }
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}

const list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};
printList(list);
console.log('method 2 with recursion');
printListRecursion(list);
console.log('method 3 with reverse');
printReverseList(list);


// /array-methods task 11
console.log();
console.log("task-11");
function unique(strings) {
    const result = [];
    nextInput:
        for (let i = 0; i < strings.length; i++) {
            const str = strings[i];
            for (let j = 0; j < result.length; j++) {
                if(result[j] === str) continue nextInput;
            }
            result.push(str);
        }
        return result;
}
const strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", "8-()"
];
console.log(unique(strings));



