//write a code to check whether the number is odd or even , example 25 odd, 2 is even
let number1 = 7
 if(number1 % 2 == 0){
    console.log (`"the number ${number1} is even"`)
} else {console.log(`"the number ${number1} is odd"`)}


if(number1 % 2 ==1 ){
    console.log (`"the number ${number1} is odd"`)
} else {console.log(`"the number ${number1} is even"`)}


//write a code to check wether the number is prime number or not, 
//example 7 prime, 6 is not prime number
//prime number bilangan dibagi 1 dan diri sendiri
// bilangan prima hanya punya 2 faktorial

let res = true
for (let i=2; i< number1; i++){
    //7%2==0 --> false
    if (number1 % i == 0  ){
        res = false//bukan prima 
        break
    }
}

console.log (res == true ? "prime" :"not prime")


let a = 10//kopi
let c = 4//jus
let d = 0

d=a//kopi
a=c// jus
c=d//kopi



console.log (a)//4
console.log (c)//10


console.log("------")
//write a code to find the sum of the number 1 to N
//eexample 5 = 1+2+3+4+5=15, example 3 = 1+2+3=6

let numberr = 5
let hasill = 0
 for (let i = 1; i<=numberr; i++){hasill =hasill +i }
console.log ( hasill) 


//write code to find factorial of number
//example 4!= 4x3x2x1=24
//example 6!= 6x5x4x3x2x1=720

let xxx = 4
 let resultss = 1
 for  (let i = xxx; i>0; i--)

   { resultss = resultss*i
}
 console.log (resultss)

 console.log("----------------")
//fibonaci 15 610

//   1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9
//0, 1 , 1 , 2 , 3 , 5 , 8 , 13 , 21 , 34
//               (x + x-1)

let prev_number = 0 //0
let current_number = 1//1
console.log("i=",1, "current_number=", current_number)
for(let i = 2; i <= 15; i++){
    let temp =prev_number//0
    prev_number =current_number//1
    current_number= current_number+temp//2
    console.log("i=", i , "current_number=", current_number)

}
