console.log("hello world")
// write a code whether the number is odd or even

const numberCheck = 25
const numberCheck1 = 2
if (numberCheck % 2 == 0 ) {
    console.log ("The number is even");
} 

else { console.log ("The number is odd")}

if (numberCheck1 % 2 == 0 ) {
    console.log ("The number is even");
} 

else { console.log ("The number is odd")}

//write a code to check whether the number is prime number or no
//example 7 is prime number and 6 not prime number

let NUMBER= 100
let jumlah_fak = 0
for (let i = 0;  i <= NUMBER ; i++) {
    if (NUMBER % i==0){
        jumlah_fak++} 
    } 
    if(jumlah_fak > 2) 
        {console.log (`${NUMBER} Bukan Bilangan Prima `)}
    else {console.log (`${NUMBER} Bilangan Prima`)}
 
//write a code to find the sum of the number 1 to N, example 5 and 3
//  let a =  3
//  let hasil = 0
//  for (let i = 0; i<=a; i++){hasil =hasil +i }
// console.log ( hasil) // hasil dari loop tidak akan pernah balik ke awal

 //write a code to find factorial of a number, example 4!
 let b = 4
 let result = 1
 for  (let i = b; i>0; i--)
 //let i= run dari mana, i= sampai kapan run, mau di kondisikan seperti apa)
    {
    console.log(i)
    result = result*i
}
 console.log (result)

 //write a code to print the first N fibonacci numbers example 15


 