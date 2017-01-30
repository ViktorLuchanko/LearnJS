// /string-task-1
function ucFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
// const string = ucFirst("john");
console.log("john - " + ucFirst("john"));
console.log("\n");


// /string-task-2
function checkSpam(str) {
    return (str.toLowerCase().indexOf("xxx") !== -1 || str.toLowerCase().indexOf("viagra") !== -1)
}
console.log("buy ViAgRA now - " + checkSpam("buy ViAgRA now"));
console.log("free xxxxx - " + checkSpam("free xxxxx"));
console.log("innocent rabbit - " + checkSpam("innocent rabbit"));
console.log("\n");


// /string-task-3
function truncate(str, maxLen) {
    if(str.length > maxLen) {
        if(maxLen < 3) {
            return "...";
        } else return str.slice(0, maxLen - 3) + "...";
    } else return str;
}
console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
console.log(truncate("Всем привет!", 20));
console.log("\n");


// /string-task-4
function extractCurrencyValue(str) {
    // return +str.slice(1);
    return str.match(/\d/g).join("");
}
console.log(extractCurrencyValue("$120"));







