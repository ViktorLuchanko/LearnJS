// /task - 1
console.log('task - 1');

const dateToday = new Date(2012, 1, 20, 3, 12);
console.log(dateToday);


// /task - 2
console.log();
console.log('task - 2');
function getWeekDay(date) {
    const day = ['нд', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
    return day[date.getDay()];
}
const dateNow = new Date();
const dateOld = new Date(2012, 0, 3);
console.log(getWeekDay(dateNow));
console.log(getWeekDay(dateOld));


// /task - 4
console.log();
console.log('task - 4');
function getDateAgo(date, days) {
    const dateCopy = new Date(date);
    dateCopy.setDate(date.getDate() - days);
    return dateCopy.getDate();
}
const dateAgo = new Date(2015, 0, 2);
console.log(getDateAgo(dateAgo, 1));
console.log(getDateAgo(dateAgo, 2));
console.log(getDateAgo(dateAgo, 365));


// /task - 5
console.log();
console.log('task - 5');
function getLastDayOfMonth(year, month) {
    const date = new Date(year, month + 1, 0);
    return date.getDate()
}
console.log(getLastDayOfMonth(2012, 1));


// /task - 6
console.log();
console.log('task - 6');

function getSecondsToday() {
    const now = new Date();
    const toDay = new Date(now.getYear(), now.getMonth(), now.getDay());
    const diff = now - toDay;
    return Math.floor(diff / 1000);
}
console.log(`seconds today: ${getSecondsToday()}`);


// /task - 7
console.log();
console.log('task - 7');

function getSecondsToTomorrow() {
    const now = new Date();
    const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    return Math.floor( (tomorrow - now) / 1000);
}
console.log(`seconds to tomorrow: ${getSecondsToTomorrow()}`);


// /task - 8
console.log();
console.log('task - 8');

function formatDate(date) {
    let dd = date.getDate();
    if(dd < 10) dd = `0${dd}`;
    let mm = date.getMonth()+1;
    if(mm < 10) mm = `0${mm}`;
    let yy = date.getYear() % 100;
    if(yy < 10) yy = `0${yy}`;
    return `${dd}.${mm}.${yy}`;
}
const d = new Date(new Date - 86400 * 1000);
// const d = new Date(2016, 0, 5);
const dNow = new Date();
console.log(`Date: ${formatDate(d)}`);
console.log(`Date now: ${formatDate(dNow)}`);


// /task - 9
console.log();
console.log('task - 9');

function newFormatDate(date) {
    let diff = new Date() - date; // разница в миллисекундах

    if (diff < 1000) { // прошло менее 1 секунды
        return 'только что';
    }

    let sec = Math.floor(diff / 1000); // округлить diff до секунд

    if (sec < 60) {
        return sec + ' сек. назад';
    }

    let min = Math.floor(diff / 60000); // округлить diff до минут
    if (min < 60) {
        return min + ' мин. назад';
    }
    // let dd = date.getDate();
    // if(dd < 10) dd = `0${dd}`;
    // let mm = date.getMonth()+1;
    // if(mm < 10) mm = `0${mm}`;
    // let yy = date.getYear() % 100;
    // if(yy < 10) yy = `0${yy}`;
    // let hh = date.getHours();
    // if(hh < 10) hh = `0${hh}`;
    // let mn = date.getMinutes();
    // if(mm < 10) mn = `0${mn}`;
    // return `${dd}.${mm}.${yy} ${hh}:${mn}`;
    let d = date;
    d = [
        '0' + d.getDate(),
        '0' + (d.getMonth() + 1),
        '' + d.getFullYear(),
        '0' + d.getHours(),
        '0' + d.getMinutes()
    ];
    for (let i = 0; i < d.length; i++) {
        d[i] = d[i].slice(-2);
    }
    return `${d.slice(0,3).join('.')} ${d.slice(3).join(':')}`;
}
console.log(newFormatDate(new Date(new Date - 1)));
console.log(newFormatDate(new Date(new Date - 30 * 1000)));
console.log(newFormatDate(new Date(new Date - 5 * 60 * 1000)));
console.log(newFormatDate(new Date(new Date - 86400 * 1000)));

console.log();
console.log((0.1 + 0.2).toFixed(2) + '$');










