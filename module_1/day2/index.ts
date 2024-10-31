let grade : number = 80
if(grade >= 85) {console.log ("congratulation you are Grauduate")

 } else {
    console.log ("you only participant")
 }

 // type color = ("red" | "yellow" | "green")

 let trafficlight :string = "green"

 if(trafficlight == "red"){
    console.log ("stop")
 } else if (trafficlight == "yellow") {
    console.log ("be careful")
 } else if (trafficlight == "green"){
    console.log ("run")
} else {
    console.log ("invalid color")
}
 //  untuk bagian pilihan akhir bisa juga  else ataupun else if

 

 console.log ( 12 == "12")
 console.log (12 === "12")
 console.log (12 === "13")
 


 switch(trafficlight){
     case "red": //trafficlight =="red"
         console.log ("stop")
         break
     case "yellow":
         console.log ("be carefull")
         break
     case "green":
         console.log ("run")
         break
     default:
         console.log("invalid color");
 }
 
 const expr: string =  "Papayas";
 switch  (expr) {
     case "Orange":
         console.log ("Oranges are $0.59 a pound");
         break
     case "Mangoes":
     case "Papayas":
         console.log ("Mangoes and Papayas are $2.79 a pound");
         break
     default:
         console.log( `Sorry, we are out of ${expr}`);       
 }

//switch dibawah ini liat acuan paling atas let, ketika let nya sesuai dengan case maka
//sesuai apa console log nya, kalao diubah false
switch(false){
    case grade >= 85: // false === false maka true , ketika true yang atas yang di eksekusi congratulation di eksekusi
        console.log ("congratulation you are Graduate");// untuk diatas belajar mtk gerbang logika
        break;
    default:
        console.log ("you only participant")
}

console.log ("----------------")
//truthy dan falshy
// and && strich jika satu false maka false
//gerbang logika
//negasi pakai tandaseru
console.log(" logika &&")
console.log (true && true)// true
console.log (true && false)// false
console.log (false && false) //false
console.log ("logika ||") // or || kalao salah satu true maka true, dua duanya false maka dia false
console.log ( true|| true ) //true
console.log (true || false)//true
console.log (false|| false)//false
console.log("----------------------")
                           //true  &&  (   //false   ||    //true)
                           //true          //true
console.log ("result:" , 65 >= 57 && ("a" == "AA" || 54 == "54"))
console.log ("a"== "A")
console.log ( "aries" == "Aries")

console.log ("----------------------")

console.log ("b"  != "B")//true
console.log (!true)//false
console.log ("aa" != "AA" && 677 <= 87)//false


console.log ("--------ternary operator--------")

let str :string ="Typerscript"
if (str === "Typescript"){
    if (56==45){
        console.log("ngapain")
     } else {
        console.log("gak ngapa2in")
     }
     console.log ("this is Typescript")
} else {
    console.log("This is not typescript")
}

let result3 =
(str === "Typescript" && 12 == "12" ) || (34 >=0 && 445 != 90)?
 56 == 45 ? "ngapain": "gak ngapa2in" :"this is not typescript"

console.log(result3)

 console.log ("===the && operator=====")

//false yang dimunculkan kiri
//true yang dimunculkan kanan

let value1 : number = 0
let result4 :number | string =value1 && 'Hello World'
console.log (result4) //Hello World , kanan

let value2 : number = 23
let result5 :number | string =value2 && 'Hello World'
console.log (result5) //Hello World , kanan


console.log ("===the || operator=====")
//false yang di assign kanan
//true yang di assign kiri
let value3 :number = 0
let result6 : number | string = value3 || 'Hello World'
console.log (result6)// Hello World, kanan

let value4 : number = 0
let result7 : number| string =value4 || ''
console.log (result7)//'', kanan

let value5 : string = "Dimas"
let result8 :number | string = value5 || 'Guest8'
console.log (result8)//Dimas,kiri

//atau keseimpulannya
//string kosong falshy value

/*
jika falsy value AND value maka yang di assign yang (kiri) value falsy
jika truthy value AND value maka yang di assign yang (kanan) value

jika falsy value OR value maka yang di assign yang (kanan) value
jika truthy value OR value maka yang di assign yang (kiri) value truthy

*/

