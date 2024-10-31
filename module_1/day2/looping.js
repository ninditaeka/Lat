//kaalo di ganti let maka console.log(i) nya tidak muncul karena di di dlm kurung
for (var i = 0; i <= 5; i += 3) {
    console.log("hello", i);
}
console.log(i);
for (var i_1 = 5; i_1 <= 100; i_1 *= 2) {
    console.log("hello", i_1);
}
for (var i_2 = 0; i_2 <= 5; i_2 = i_2 + 1) {
    console.log("hello", i_2);
}
// for(let i=0;i<=5; i-=){
//     console.log("hello",i)
// } infinity
// for (let i=0; i <=5 ; ){
//     console.log("hello=", i)
// } infinity
// for(let i=0; ;i++){
//     console.log("hello", i)
// } infinity
var j = 0; //awalan
while (j <= 5) {
    console.log("Hello while", j);
    j++; //j =j+1
}
console.log(j);
