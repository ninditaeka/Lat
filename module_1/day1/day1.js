//write a code to find area of rectangle
let length =5
let width = 3
let area = length*width
console.log (area)

//write a code to find perimeter of rectangle
perimeter = 2*(length+width)
console.log (perimeter)

//wirte a code to find diameter,circumference and area of a circle
 let rad = 5
 let phi= 3.14
 let radkuadrat = rad**2
 let diameter = 2*rad
 let circumference = 2*phi*rad
 let area_circle = phi*radkuadrat

console.log(`diameter : ${diameter}, circumference : ${circumference}, area_circle ${area_circle}`)
console.log(`diameter ${diameter}`)
console.log(circumference)
console.log(area_circle)

//wirte a code to find angels of triangles if two angels are given

let a = 80
let b = 65
let c = 180 - (a+b)
console.log (c)


//write a code to convert days to years, months and days 
// ( notes : 1 years 365 days, 1 month : 30 days   )

// let days= 400
// let yeardays = Math.round (days/365)
// let monthdays = Math.round (yeardays%30)
// let daydays = (days - (  yeardays * 365)) % 30

let days= 400
let leftyears = days % 365
let year = Math.round (days/365) 
 let leftDays = leftyears %30 
 let month = Math.round (leftyears/30)
console.log(`leftyears : ${leftyears}`)
console.log (`year = ${year}`)
console.log(`leftDays = ${leftDays}`)
console.log(`month = ${month}`)
 
console.log (`${year} year , ${month} months, ${leftDays} days`)


let dayb= 366

let leftyearsb = dayb % 365
let yearb = Math.round (dayb/365) 
 let leftDayb = leftyearsb %30 
 let monthb = Math.round (leftyearsb/30)

 console.log(leftyearsb)
 console.log(yearb)
 console.log (leftDayb)
 console.log (monthb)
console.log (`${yearb} year , ${monthb} months, ${leftDayb} days`)


//write a code to get difference betweeen dates in days

//coba di tanggal
let info = "2022-01-20";
let info1 = "2022-01-22";


// convertion date into DD//MM//YYYY
let splitinfo = info.split("-");
let splitinfo1 = info1.split("-");

let slashinfo = `${splitinfo[1]} / ${splitinfo [2]} / ${splitinfo[0]}`
let slashinfo1 = `${splitinfo1[1]} / ${splitinfo1 [2]} / ${splitinfo1[0]}`

console.log(typeof slashinfo)
console.log(typeof slashinfo1)
//change into date

let dateslashinfo = new Date(slashinfo);
let dateslashinfo1 = new Date (slashinfo1);

console.log(typeof dateslashinfo)
console.log(typeof dateslashinfo1)

// //calculating different time of two dates
let diffday_in_time = dateslashinfo1.getTime()-dateslashinfo.getTime();

console.log(diffday_in_time)

// //calcutaing convertion of the no. of days between two dates
let diffday_in_day = Math.round
(diffday_in_time/(1000 * 3600 *24));

console.log (diffday_in_day)

// //display the final number of th days result
console.log ("Different day between date is:" + diffday_in_day + "days"
)


console.log('------------------')

//new date = class
//date.get time =object

let tanggal1 = new Date ("2022-01-20") // kalao paakai ts type dat a any
let tanggal2 = new Date ("2022-01-22")// kalao pakai ts type data any
let hasilbedahari = tanggal2-tanggal1
console.log (`hasil beda harinya adalah ${hasilbedahari / (24*60*60*1000)} hari`)
