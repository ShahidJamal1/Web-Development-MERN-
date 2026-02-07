//Time
const now=new Date();//this gives universal time coordinate(UTC)
console.log(now);

console.log(now.toString());
console.log(now.toLocaleString());
console.log(now.toISOString());

//date according to local time
//days:Mon-sun(1 based)
//Month:0-11

console.log(now.getDate());
console.log(now.getDay());
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getHours());

//for your own format of date but this is inconsistent
const d=new Date(2026,2,4,4,10,18,120);
console.log(d);

//time history and how to convert milisecon to time&date
const x=Date.now();//this gives mili second like 1770202167272
console.log(x);

//timestamp
//const dates=new Date(x);
//const dates = new Date(0);//this fixed from Thu Jan 01 1970 05:30:00 GMT+0530 (India Standard Time)
const dates = new Date(now);
//const dates = new Date(-1231541);//this go back from 1970
console.log(dates);

console.log(dates.toString());