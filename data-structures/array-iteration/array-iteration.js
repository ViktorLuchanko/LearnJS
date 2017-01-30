// /task - 1
console.log('task - 1');
const arr = ["Есть", "жизнь", "на", "Марсе"];
const arrLength = arr.map( (name) => {
   return name.length;
});
console.log(arrLength);


// /task - 2
console.log();
console.log('task - 2');

function getSums(arr) {
    const empArr = [];
    // if(!arr.length) return result;
    const lastSum = arr.reduce( (acc, value) => {
        empArr.push(acc);
        return acc + value;
        // return acc;
    });
    empArr.push(lastSum);
    return empArr;
}
const arrReduce = [1, 2, 3, 4, 5, 6];
console.log(getSums(arrReduce));







