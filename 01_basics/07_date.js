let myDate = new Date()
console.log(myDate);

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());

console.log(typeof myDate);

let myCreatedDate = new Date(2026, 0, 23)  // Month started from 0 in javascript
console.log(myCreatedDate.toDateString());

let myCreatedDate = new Date(2026, 0, 23, 5, 3)  
console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("2023-01-14")   // when written in YYYY-MM-DD format, month started from 1
console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("01-14-2026")   // DD-MM-YYYY format, followed in India
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);  // mili-second
console.log(myCreatedDate.getTime());  

console.log(Math.floor(Date.now()/1000));  

