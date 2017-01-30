// /object-for-in - task - 1
console.log("task - 1");
function isEmpty(obj) {
    return Object.keys(obj).length === 0;
    // for(var key in obj) {return false}
    // return true
}

const schedule = {};
console.log("ojb empty " + isEmpty(schedule));
schedule["8:30"] = "get up";
console.log("ojb empty " + isEmpty(schedule));
console.log("");


// /object-for-in - task - 2
console.log("task - 2");
"use strict";
function countSalaries(obj) {
    // var sum = 0;
    // for (let prop in obj) {
    //     if(obj.hasOwnProperty(prop)){
    //         console.log(prop);
    //         sum += obj[prop];
    //     }
    // }
    function sum(acc, key) { // acc is sum
        return acc + obj[key];
    }

    return Object.keys(obj).reduce(sum, 0);
}

const salaries = {
    "Вася": 100,
    "Петя": 300,
    "test": 0,
    "Даша": 250
};

console.log(`Salaries: ${countSalaries(salaries)}`);
console.log("");


// /object-for-in - task - 3
console.log("task - 3");
function maxSalary(obj) {
    function max(acc, key) { // acc is sum
        // return acc < obj[key] ? obj[key] : acc;
        return Math.max(acc, obj[key]);
    }

    return Object.keys(obj).reduce(max, 0);
}
console.log("maxSalary: " + maxSalary(salaries));
console.log("");


// /object-for-in - task - 4
console.log("task - 4");
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function multiplyNumeric(menu) {
    for (let keys in menu) {
        if (menu.hasOwnProperty(keys)) {
            if (isNumeric(menu[keys])) {
                menu[keys] = menu[keys] * 2;
            }
        }
    }
}
let menu = {
    width: 400,
    height: 600,
    title: "My menu",
    test: 500
};
function modifyMenu(menu) {
    menu.test2 = menu.test;
    delete menu.test;
}

function createMenu(menu) {

    const result = Object.keys(menu)
        .filter(key => key !== "test")
        // .forEach(key => result[key] = menu[key]);
        .reduce((acc, key) => {
            acc[key] = menu[key];
            return acc;
        }, {});
    result.test2 = menu.test;
    return result
}
let menu2 = createMenu(menu);
console.log(menu2);

multiplyNumeric(menu);

console.log(menu);
// console.log("menu: width=" + menu.width + ", heigth=" + menu.height + ", title= " + menu.title);

