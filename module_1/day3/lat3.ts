//write a code to dispaly multiplication of a given integer
//example number 9

const num = 9
let div= 0
for(let i =1 ; i<= 10; i++){
console.log(`${num} x ${i}`)
}

//write a code to check palindrome or not

let word = "gubuk"
let reverseWord =  word.split(''). reverse().join('')// split mau pisah berdasarkan apa, join mau disatuin pakai apa
console.log(word)
console.log(reverseWord)

if (word == reverseWord) {
    console.log ("palindrom")
 }
 else{
    console.log("not palindrom")
 }

 //write a code to convert centimeter to kilometer
 //example 100000cm -> 1 km

let centiValue = 100000
let kmValue = centiValue/100000
console.log (`${kmValue} km`)

//write a code to format number as currency (IDR)
//example 1000 -? Rp. 1.000,00

let rupiah = 1000
let rupiahTofixed = rupiah.toFixed(2)
console.log (`Rp ${rupiahTofixed}`)

console.log ("---caralaincurency---")

let rupiahCurrency = rupiah.toLocaleString("id-ID",{style:"currency",currency:"IDR"}) 
console.log (rupiahCurrency)

//write a code to remove the first occurence of a given "search string" from a string
//example : string ="Hello world", search string ="ell" -> "Ho World"

let searchWord = "Hello world Hello world"
let searchWordstring = searchWord.split("ell").join('')
console.log(searchWordstring)

//write a code to capitalize the first letter of each qord in a string
//example: "hello world " -> "Hello World"

let wordArray = []
let wordCapital = "hello world"
let wordCapitalSplit = wordCapital.split(' ')
console.log(wordCapitalSplit)

for (let i=0; i< wordCapitalSplit.length; i++){ 

    console.log(wordCapitalSplit[i])
    let wordCapitalSplitBaru = wordCapitalSplit[i]
 
    let WordSplit = wordCapitalSplitBaru.split("")
    
    WordSplit[0]= WordSplit[0].toUpperCase()

    let WordSplitUpperJoin = WordSplit.join('')

    console.log (WordSplitUpperJoin)

    wordArray.push(WordSplitUpperJoin)
}

console.log(wordArray.join(' '))
