//write a code to dispaly multiplication of a given integer
//example number 9
var num = 9;
var div = 0;
for (var i = 1; i <= 10; i++) {
    console.log("".concat(num, " x ").concat(i));
}
//write a code to check palindrome or not
var word = "gubuk";
var reverseWord = word.split('').reverse().join(''); // split mau pisah berdasarkan apa, join mau disatuin pakai apa
console.log(word);
console.log(reverseWord);
if (word == reverseWord) {
    console.log("palindrom");
}
else {
    console.log("not palindrom");
}
//write a code to convert centimeter to kilometer
//example 100000cm -> 1 km
var centiValue = 100000;
var kmValue = centiValue / 100000;
console.log("".concat(kmValue, " km"));
//write a code to format number as currency (IDR)
//example 1000 -? Rp. 1.000,00
var rupiah = 1000;
var rupiahTofixed = rupiah.toFixed(2);
console.log("Rp ".concat(rupiahTofixed));
console.log("---caralaincurency---");
var rupiahCurrency = rupiah.toLocaleString("id-ID", { style: "currency", currency: "IDR" });
console.log(rupiahCurrency);
//write a code to remove the first occurence of a given "search string" from a string
//example : string ="Hello world", search string ="ell" -> "Ho World"
var searchWord = "Hello world Hello world";
var searchWordstring = searchWord.split("ell").join('');
console.log(searchWordstring);
//write a code to capitalize the first letter of each qord in a string
//example: "hello world " -> "Hello World"
var wordArray = [];
var wordCapital = "hello world";
var wordCapitalSplit = wordCapital.split(' ');
console.log(wordCapitalSplit);
for (var i = 0; i < wordCapitalSplit.length; i++) {
    console.log(wordCapitalSplit[i]);
    var wordCapitalSplitBaru = wordCapitalSplit[i];
    var WordSplit = wordCapitalSplitBaru.split("");
    WordSplit[0] = WordSplit[0].toUpperCase();
    var WordSplitUpperJoin = WordSplit.join('');
    console.log(WordSplitUpperJoin);
    wordArray.push(WordSplitUpperJoin);
}
console.log(wordArray.join(' '));
